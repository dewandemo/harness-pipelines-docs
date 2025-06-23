---
title: failure strategy manual
---

```yaml
# sample pipeline with manual-intervention
# failure strategy that fails on timeout.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: [ all ]
        action:
          manual-intervention:
            timeout: 30m
            timeout-action: fail

---

# sample pipeline with manual-intervention
# failure strategy with a complex timeout
# action.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: [ all ]
        action:
          manual-intervention:
            timeout: 30m
            timeout-action:
              retry:
                attempts: 10
                interval: 30s
                failure-action: success

```
