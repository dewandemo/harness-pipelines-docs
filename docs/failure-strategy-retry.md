---
title: failure strategy retry
---

```yaml
# sample pipeline with a retry failure strategy
# that fails if all retry attempts fail.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: [ unknown ]
        action:
          retry:
            attempts: 5
            interval: 10s
            failure-action: fail

---

# sample pipeline with a retry failure strategy
# that demonstrates multiple, staggered intervals.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: [ unknown ]
        action:
          retry:
            attempts: 5
            interval: [ 10s, 30s, 1m, 5m, 10m ]
            failure-action: fail

---

# sample pipeline with retry failure strategy with a
# complex failure action.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: [ unknown ]
        action:
          retry:
            attempts: 5
            interval: 10s
            failure-action:
              manual-intervention:
                timeout: 60m
                timeout-action: fail

---

# sample pipeline with simplified retry strategy
# syntax that should apply sane defaults.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: all
        action: retry
```
