---
id: pipeline-samples-language-examples
sidebar_position: 7
title: Language-specific Examples
---

Below are sample pipelines tailored for popular languages.

## Java

```yaml
pipeline:
  stages:
    - name: build
      steps:
        - run:
            container: maven:3.9-eclipse-temurin-17
            script: mvn -B -q -DskipTests package
    - name: test
      steps:
        - run:
            container: maven:3.9-eclipse-temurin-17
            script: mvn -B -q test
```

## JavaScript / Node.js

```yaml
pipeline:
  stages:
    - name: install
      steps:
        - run:
            container: node:18
            script: npm ci
    - name: build
      steps:
        - run:
            container: node:18
            script: npm run build
    - name: test
      steps:
        - run:
            container: node:18
            script: npm test -- --ci
```

## Python

```yaml
pipeline:
  stages:
    - name: setup
      steps:
        - run:
            container: python:3.11
            script: |
              python -m venv .venv
              . .venv/bin/activate
              pip install -r requirements.txt
    - name: test
      steps:
        - run:
            container: python:3.11
            script: |
              . .venv/bin/activate
              pytest -q --maxfail=1 --disable-warnings
```

## Go

```yaml
pipeline:
  stages:
    - name: build
      steps:
        - run:
            container: golang:1.22
            script: |
              go mod download
              go build ./...
    - name: test
      steps:
        - run:
            container: golang:1.22
            script: go test ./... -cover
```

## .NET

```yaml
pipeline:
  stages:
    - name: restore
      steps:
        - run:
            container: mcr.microsoft.com/dotnet/sdk:8.0
            script: dotnet restore
    - name: build
      steps:
        - run:
            container: mcr.microsoft.com/dotnet/sdk:8.0
            script: dotnet build --configuration Release --no-restore
    - name: test
      steps:
        - run:
            container: mcr.microsoft.com/dotnet/sdk:8.0
            script: dotnet test --no-build --verbosity normal
```
