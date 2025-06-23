---
title: pipeline on
---

```yaml
# sample pipeline for push

pipeline:
  on: push
  stages:
  - steps:
    - run:
        script: go build

---
# sample pipeline for push and pull request

pipeline:
  on:
  - push
  - pull_request
  stages:
  - steps:
    - run:
        script: go build

---
# sample pipeline for push and pull request,
# limited by branch

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
