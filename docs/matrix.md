---
title: matrix
---

```yaml
# stage matrix

pipeline:
  stages:
  - steps:
    - run:
        container: golang:${{ matrix.go }}
        script: go build
    strategy:
      matrix:
        go:
        - "1.19"
        - "1.20"
        - "latest"
        name:
        - "latest"
        - "20"
        - "21"

---

# step matrix

pipeline:
  stages:
  - steps:
    - run:
        container: golang:${{ matrix.go }}
        script: go build
      strategy:
        matrix:
          go:
          - "1.19"
          - "1.20"
          - "latest"
          name:
          - "latest"
          - "20"
          - "21"

---

# matrix with exclude

pipeline:
  stages:
  - steps:
    - run:
        container: golang:${{ matrix.version }}
        script: go build
    strategy:
      matrix:
        go:
        - "1.19"
        - "1.20"
        - "latest"
        name:
        - "latest"
        - "20"
        - "21"
        exclude:
          - go: "latest"
            node: "latest"

---

# matrix with include

pipeline:
  stages:
  - steps:
    - run:
        container: golang:${{ matrix.version }}
        script: go build
    strategy:
      matrix:
        include:
          - go: "latest"
            node: "latest"
          - go: "1.19"
            node: "latest"

---

# limit concurrency

pipeline:
  stages:
  - steps:
    - run:
        container: golang:${{ matrix.version }}
        script: go build
    strategy:
      max-parallel: 10
      matrix:
        incoude:
          - go: "latest"
            node: "latest"
          - go: "1.19"
            node: "latest"

---

# for loop

pipeline:
  stages:
  - strategy:
      for:
        iterations: 10
    steps:
    - run:
        script: echo ${{ for.iteration }}

---

# while loop

pipeline:
  stages:
  - strategy:
      while:
        iterations: 10
        condition: ${{ status == "failure" }}
    steps:
    - run:
        script: echo ${{ for.iteration }}

```
