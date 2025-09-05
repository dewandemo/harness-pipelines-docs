---
id: pipeline-samples-advanced
sidebar_position: 2
title: Advanced Pipeline Examples
---

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
