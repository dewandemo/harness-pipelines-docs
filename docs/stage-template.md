---
title: stage template
---

```yaml
# template stage

pipeline:
  stages:
  - template:
      uses: account.golang
      with:
        version: "1.19"
        goos: linux
        goarch: amd64
        cgo-enabled: true

---
# template stage with version

pipeline:
  stages:
  - template:
      uses: account.golang@1.0.0
      with:
        version: "1.19"
        goos: linux
        goarch: amd64
        cgo-enabled: true

---
# template definition (referenced by template stage)

template:
  inputs:
    goos:
      type: string
      default: linux
    goarch:
      type: string
      default: amd64
    version:
      type: string
      default: '1.20'
  stage:
    steps:
    - run:
        container: golang:${ inputs.version }
        script: go build
    - run:
        container: golang:${ inputs.version }
        script: go build

```
