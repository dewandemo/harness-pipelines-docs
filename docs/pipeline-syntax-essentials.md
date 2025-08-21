---
title: Harness Pipeline Syntax — Essentials
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

> **Looking for the full spec?** See the [full YAML reference](./pipeline-syntax-reference).

# Harness Pipeline Syntax — Essentials

Harness Pipelines are defined using YAML syntax. This guide covers the essential elements you need to build your first working pipeline.

## `pipeline`

Every pipeline YAML file starts with `pipeline`. All other elements are children of this root element. The following sample shows a simplified structure of a Harness pipeline.

```yaml
pipeline:
  name: example-pipeline
  id: example-pipeline-id
  on: push
  stages:
    - stage:
        name: build-stage
        steps:
          - step:
              ...
          - step:
              ...
    - stage:
        name: deploy-stage
        steps:
          - step:
              ...
          - step:
              ...
```

## `on`

Defines what triggers your pipeline to run. The most common triggers are:

- `push` - Runs when code is pushed to the repository
- `pull_request` - Runs when a pull request is created or updated

```yaml
pipeline:
  on: push # Simple trigger
  stages:
    - steps:
        - run:
            script: go build
```

```yaml
pipeline:
  on:
    - push
    - pull_request # Multiple triggers
  stages:
    - steps:
        - run:
            script: go build
```

### Targeting specific branches

```yaml
pipeline:
  on:
    - push:
        branches:
          - main
    - pull_request:
        branches:
          - main
  stages:
    - steps:
        - run:
            script: go build
```

## `stages`

Stages are the main building blocks of your pipeline. Each stage represents a logical phase of your workflow (build, test, deploy, etc.).

```yaml
pipeline:
  stages:
    - steps:
        - run:
            script: go build
```

### Multiple stages

```yaml
pipeline:
  stages:
    - name: build
      steps:
        - run:
            script: go build
    - name: test
      steps:
        - run:
            script: go test
```

## `steps`

Steps are the individual actions within a stage. The most common step type is `run`, which executes commands.

```yaml
pipeline:
  stages:
    - steps:
        - run:
            script: go build
```

### Multiple steps

```yaml
pipeline:
  stages:
    - steps:
        - run:
            script: go build
        - run:
            script: go test
```

## `run`

The `run` step executes shell commands or scripts. It's the workhorse of most pipelines.

### Basic run step

```yaml
- run:
    script: go build
```

### With shell specification

```yaml
- run:
    shell: bash
    script: go build
```

### With container

```yaml
- run:
    script: go build
    container: golang:1.20
```

## `env`

Environment variables are available to all stages and steps. They can be set at the pipeline, stage, or step level.

### Pipeline-level environment variables

```yaml
pipeline:
  env:
    GOOS: linux
    GOARCH: amd64
  stages:
    - steps:
        - run:
            script: go build
```

### Step-level environment variables

```yaml
- run:
    script: go build
    env:
      GOOS: linux
      GOARCH: amd64
```

## `if`

Conditional execution allows you to run pipelines, stages, or steps only when certain conditions are met.

### Pipeline-level condition

```yaml
pipeline:
  if: ${{ pipeline.branch == "main" }}
  stages:
    - steps:
        - run:
            script: go build
```

### Stage-level condition

```yaml
pipeline:
  stages:
    - if: ${{ branch == "main" }}
      steps:
        - run:
            script: go build
```

## `inputs`

Inputs allow you to parameterize your pipeline, making it reusable with different values.

### Basic input

```yaml
pipeline:
  inputs:
    version:
      type: string
  stages:
    - steps:
        - run:
            script: go build
            container: golang:${{ inputs.version }}
```

### Input with default value

```yaml
pipeline:
  inputs:
    version:
      type: string
      default: "1.20"
  stages:
    - steps:
        - run:
            script: go build
            container: golang:${{ inputs.version }}
```

### Input with validation

```yaml
pipeline:
  inputs:
    version:
      type: string
      enum:
        - "1.19"
        - "1.20"
        - "1.21"
  stages:
    - steps:
        - run:
            script: go build
            container: golang:${{ inputs.version }}
```

## Complete Example

Here's a complete pipeline that demonstrates all the essential elements:

```yaml
pipeline:
  on:
    - push:
        branches:
          - main
    - pull_request:
        branches:
          - main

  inputs:
    go_version:
      type: string
      default: "1.20"

  env:
    GOOS: linux
    GOARCH: amd64

  stages:
    - name: build
      steps:
        - run:
            script: go build
            container: golang:${{ inputs.go_version }}
            env:
              CGO_ENABLED: 0

    - name: test
      if: ${{ branch == "main" }}
      steps:
        - run:
            script: go test ./...
            container: golang:${{ inputs.go_version }}
```

This pipeline:

1. Triggers on pushes and pull requests to main
2. Accepts a Go version input with a default
3. Sets global environment variables
4. Has two stages: build and test
5. Only runs tests on the main branch
6. Uses containers for isolation
