---
title: step queue
---

```yaml
# simple queue step.

pipeline:
  stages:
  - steps:
    - run:
        script: go build

    - timeout: 30m # queue step has 30 minute timeout
      queue:
        key: some-queue
        scope: pipeline

    - run:
        script: go test

```
