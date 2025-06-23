---
title: pipeline inputs
---

```yaml
# pipeline with inputs

pipeline:
  inputs:
    version:
      type: string

  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ inputs.version }}

---

# inputs with required enabled

pipeline:
  inputs:
    version:
      type: string
      required: true

  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ inputs.version }}


---

# inputs with default

pipeline:
  inputs:
    version:
      type: string
      default: "1.20"

  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ inputs.version }}

---

# inputs that should be treated as secrets

pipeline:
  inputs:
    version:
      type: secret

  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ inputs.version }}
---

# inputs with enum input

pipeline:
  inputs:
    version:
      type: string
      enum:
        - "1.19"
        - "1.20"
        - "1.21"

  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ inputs.version }}

---

# inputs with pattern matching

pipeline:
  inputs:
    version:
      type: string
      pattern: "^[0-9]+.[0-9]+.[0-9]+$"

  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ inputs.version }}
```
