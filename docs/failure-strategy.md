---
title: failure strategy
---

```yaml
# sample pipeline with a basic failure strategy at the stage
# level that aborts on all errors.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
    on-failure:
      errors: all
      action: abort

---

# sample pipeline with a basic failure strategy at the step
# level that aborts on all errors.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: all
        action: abort

---

# sample pipeline with a retry failure strategy
# that aborts for enumerated error types.

pipeline:
  stages:
  - steps:
    - run:
        script: go test
        container: golang
      on-failure:
        errors: [ unknown, connectivity ]
        action: abort

```
