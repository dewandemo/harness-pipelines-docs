---
title: step run
---

```yaml
# simple run step.

pipeline:
  stages:
  - steps:
    - run:
        script: go build

---

# simple run step, short syntax

pipeline:
  stages:
  - steps:
    - run: go build

---

# simple run step, shortest syntax

pipeline:
  stages:
  - steps:
    - go build

---

# simple run step with container.

pipeline:
  stages:
  - steps:
    - run:
        script: go build
        container: golang

---

# simple run step with environment variables.

pipeline:
  stages:
  - steps:
    - run:
        script: go build
        env:
          GOOS: linux
          GOARCH: amd64

---

# simple run step with container, with custom
# docker configurtion.

pipeline:
  stages:
  - steps:
    - run:
        script: go build
        container:
          image: golang
          user: root
          group: root
          privileged: false
          pull: if-not-exists
          memory: 1gb
          cpu: 1

---

# simple run step with custom shell

pipeline:
  stages:
  - steps:
    - run:
        shell: bash # bash, powershell, etc
        script: go build

---

# simple run step with complex script

pipeline:
  stages:
  - steps:
    - run:
        script: |
          go build
          go test
---

# simple run step with complex script, as array

pipeline:
  stages:
  - steps:
    - run:
        script:
        - go build
        - go test

---

# simple run step with output variables

pipeline:
  stages:
  - steps:
    - run:
        script:
        - go build
        - go test
        output:
        - variable1
        - variable2
        - name: variable3
          mask: true
          scope: pipeline

---

# step that inhertis delegate from infrastructure,
# previously known as `includeInfraSelectors: true`

pipeline:
  stages:
  - steps:
    - run:
        delegate: inherit-from-infrastrcuture
        script:
        - go build
        - go test
---

# step that specifies delegate selectors (one or many)

pipeline:
  stages:
  - steps:
    - run:
        delegate:
        - one
        - two
        script:
        - go build
        - go test

---

# outputs example

pipeline:
  stages:
  - id: stage1
    steps:
    - id: step1
      run:
        script: |
          echo "foo=bar" >> $HARNESS_OUTPUT
    - run:
        script: |
          echo ${{ steps.step1.outputs.foo }}
    outputs:
      bar: ${{ steps.step1.outputs.foo }}
  - steps:
    - run:
        script: |
          echo ${{ stages.stage1.outputs.bar }}
```
