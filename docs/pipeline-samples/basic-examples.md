---
id: pipeline-samples-basic
sidebar_position: 1
title: Basic Pipeline Examples
---

This section covers simple pipeline examples to get started quickly.

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
