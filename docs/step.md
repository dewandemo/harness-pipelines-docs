---
title: step
---

```yaml
# simple step.

pipeline:
  stages:
  - steps:
    - run:
        script: go build

---

# step with conditions

pipeline:
  stages:
  - steps:
    - if: ${{ branch == "main" }}
      run:
        script: go build

---

# step with id

pipeline:
  stages:
  - steps:
    - id: build
      run:
        script: go build

---

# step with name

pipeline:
  stages:
  - steps:
    - name: build
      run:
        script: go build

---

# step with timeout (10 minutes)

pipeline:
  stages:
  - steps:
    - name: build
      timeout: 10m
      run:
        script: go build

---

# step with matrix

pipeline:
  stages:
  - steps:
    - strategy:
        matrix:
          node: [ 19, 20, 21 ]
      run:
        container: node:${{ matrix.node }}
        script: npm test

---

# step with failure strategy

pipeline:
  stages:
  - steps:
    - run:
        script: go test
      on-failure:
        errors: all
        action: ignore

```
