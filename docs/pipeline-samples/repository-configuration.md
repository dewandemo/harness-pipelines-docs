---
id: pipeline-samples-repository
sidebar_position: 5
title: Repository Configuration
---

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
