---
id: pipeline-samples-environment
sidebar_position: 4
title: Environment Configuration
---

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
