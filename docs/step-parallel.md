---
title: step parallel
---

```yaml
# simple parallel step.

pipeline:
  stages:
  - steps:
    - parallel:
        steps:
        - run:
            container: golang
            script: go build
        - run:
            container: golang
            script: go test

---

# simple parallel step with conditional

pipeline:
  stages:
  - steps:
    - if: ${{ branch == "main" }}
      parallel:
        steps:
        - run:
            container: golang
            script: go build
        - run:
            container: golang
            script: go test

```
