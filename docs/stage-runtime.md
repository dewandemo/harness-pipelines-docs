---
title: stage runtime
---

```yaml
# cloud runtime, short syntax

pipeline:
  stages:
  - runtime: cloud
    steps:
    - run:
        script: go build

---
# cloud runtime, long syntax

pipeline:
  stages:
  - name: build
    runtime:
      cloud:
        image: ubuntu-latest
        size: large
    platform:
      os: linux
      arch: arm
    steps:
    - run:
        script: go build

---
# kubernetes runtime, long syntax

pipeline:
  stages:
  - name: build
    runtime:
      kubernetes:
        namespace: default
    steps:
    - run:
        script: go build

---
# shell runtime, short syntax

pipeline:
  stages:
  - name: build
    runtime: shell
    steps:
    - run:
        script: go build

---
# shell runtime, long syntax

pipeline:
  stages:
  - name: build
    runtime:
      shell: true
    steps:
    - run:
        script: go build

```
