---
title: step barrier
---

```yaml
# simple barrier step.

pipeline:
  barriers:
    - some-barrier
  stages:
  - steps:
    - run:
        script: go build
    - barrier:
        name: some-barrier
    - run:
        script: go test

```
