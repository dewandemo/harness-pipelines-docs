---
title: Pipeline Examples
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 3
---

## Basic Run Step

## Long Syntax

```yaml
pipeline:
  stages:
    - steps:
        - run:
            script: go build
```

## Short Syntax
```yaml
pipeline:
  stages:
    - steps:
        - run: go build
```
## Shortest Syntax
```yaml
pipeline:
  stages:
    - steps:
        - go build
```
## Conditional Execution
```yaml
pipeline:
  if: ${{ branch == "main" }}
  stages:
    - steps:
        - run:
            script: go build
```
## Global Environment Variables
```yaml
pipeline:
  env:
    GOOS: linux
    GOARCH: amd64
  stages:
    - steps:
        - go build
```
## Repository Override
```yaml
pipeline:
  repo:
    name: drone/drone
    connector: account.github
  stages:
    - steps:
        - go build
```
## GitHub-compatible Pipelines

### Basic GitHub Format

```yaml
jobs:
  test:
    runs-on: ubuntu
    steps:
      - run: go build
```
### With Harness extension

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