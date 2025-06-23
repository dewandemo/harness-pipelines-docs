---
title: step group
---

```yaml
# simple group step.

pipeline:
  stages:
  - steps:
    - group:
        steps:
        - run:
            container: golang
            script: go build
        - run:
            container: golang
            script: go test

---

# simple group step with conditional

pipeline:
  stages:
  - steps:
    - if: ${{ branch == "main" }}
      group:
        steps:
        - run:
            container: golang
            script: go build
        - run:
            container: golang
            script: go test

```
