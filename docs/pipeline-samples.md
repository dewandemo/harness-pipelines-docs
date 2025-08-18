---
title: Pipeline Samples
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 3
---

# Pipeline Samples

This page contains practical examples of Harness Pipelines for different use cases and complexity levels.

## Basic Pipeline Examples

### Simple Build Pipeline

```yaml
pipeline:
  stages:
    - steps:
        - run:
            script: go build
```

### Short Syntax Pipeline

```yaml
pipeline:
  stages:
    - steps:
        - run: go build
```

### Shortest Syntax Pipeline

```yaml
pipeline:
  stages:
    - steps:
        - go build
```

## Conditional Execution

### Pipeline with Branch Condition

```yaml
pipeline:
  if: ${{ branch == "main" }}
  stages:
    - steps:
        - run:
            script: go build
```

## Environment Configuration

### Pipeline with Global Environment Variables

```yaml
pipeline:
  env:
    GOOS: linux
    GOARCH: amd64
  stages:
    - steps:
        - go build
```

## Repository Configuration

### Pipeline with Repository Override

```yaml
pipeline:
  # Repository should be optional. If undefined,
  # the repository and connector are the same as
  # where the yaml was stored.
  repo:
    name: drone/drone
    connector: account.github
  stages:
    - steps:
        - go build
```

## GitHub Compatibility

### GitHub-Compatible Pipeline

```yaml
jobs:
  test:
    runs-on: ubuntu
    steps:
      - run: go build
```

### GitHub Pipeline with Harness Extensions

```yaml
jobs:
  test:
    runs-on: ubuntu
    steps:
      - run: go build
      - template:
          uses: account.docker
          with:
            repo: harness/hello-world
            tags: latest
```

## Advanced Examples

### Multi-Stage Pipeline

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
    - name: build
      steps:
        - run:
            script: go build
            container: golang:1.20

    - name: test
      steps:
        - run:
            script: go test ./...
            container: golang:1.20

    - name: deploy
      if: ${{ branch == "main" }}
      steps:
        - run:
            script: echo "Deploying to production"
```

### Pipeline with Inputs and Matrix Strategy

```yaml
pipeline:
  inputs:
    go_version:
      type: string
      default: "1.20"
      enum:
        - "1.19"
        - "1.20"
        - "1.21"

  stages:
    - name: build
      strategy:
        matrix:
          version: ["1.19", "1.20", "1.21"]
      steps:
        - run:
            script: go build
            container: golang:${{ matrix.version }}
```

### Pipeline with Caching

```yaml
pipeline:
  stages:
    - name: build
      cache:
        path:
          - /go/pkg/mod
          - /go/pkg/cache
        key: go-modules.${{ branch }}
      steps:
        - run:
            script: go build
            container: golang:1.20
```

### Pipeline with Reports

```yaml
pipeline:
  stages:
    - name: test
      steps:
        - run:
            script: |
              go test -v -coverprofile=coverage.out
              go tool cover -html=coverage.out -o coverage.html
            container: golang:1.20
            report:
              - type: junit
                path: test-results.xml
              - type: coverage
                path: coverage.html
```

### Pipeline with Approval Step

```yaml
pipeline:
  stages:
    - name: build
      steps:
        - run:
            script: go build
            container: golang:1.20

    - name: approval
      approval:
        uses: harness
        with:
          timeout: 30m
          message: "Ready to deploy to production?"
          groups: ["admins", "ops"]
          min-approvers: 1

    - name: deploy
      steps:
        - run:
            script: echo "Deploying to production"
```

### Pipeline with Background Services

```yaml
pipeline:
  stages:
    - name: test
      steps:
        - background:
            script: npm run start
            container: node:18

        - run:
            script: npm test
            container: node:18
```

### Pipeline with Step Groups

```yaml
pipeline:
  stages:
    - name: build-and-test
      steps:
        - group:
            parallel: 2
            steps:
              - run:
                  script: go build
                  container: golang:1.20
              - run:
                  script: go test
                  container: golang:1.20
              - run:
                  script: go vet ./...
                  container: golang:1.20
```

These samples demonstrate various Harness Pipeline features and patterns. Use them as starting points for your own pipelines!
