---
title: stage
---

```yaml
# simple stage.

pipeline:
  stages:
  - steps:
    - run:
        script: go build

---

# simple stage, with id

pipeline:
  stages:
  - id: build
    steps:
    - run:
        script: go build

---

# simple stage, with name

pipeline:
  stages:
  - name: build
    steps:
    - run:
        script: go build

---

# simple stage, with conditions

pipeline:
  stages:
  - if: ${{ branch == "main" }}
    steps:
    - run:
        script: go build


---

# simple stage, pinned to delegate

pipeline:
  stages:
  - delegate: some-delegate
    steps:
    - run:
        script: go build

---

# simple stage, with simple failure strategy

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    on-failure:
      errors: all
      action: ignore

---

# simple stage, with matrix strategy

pipeline:
  stages:
  - steps:
    - run:
        script: go build
        container: golang:${{ matrix.version }}
    strategy:
      matrix:
        version:
        - "1.19"
        - "1.20"

---

# simple stage, with cache intelligence settings

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    cache:
      path: /path/to/file

---

# simple stage, with single service, single environment

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    service: petstore
    environment: prod

---

# simple stage, with multi-service, multi-environment

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    service:
      items:
      - petstore-frontend
      - petstore-backend
    environment:
      parallel: true
      items:
      - name: prod
        deploy-to: all
      - name: stage
        deploy-to:
        - infra1
        - infra2
      - name: dev
        deploy-to: infra3

---

# service and environment at the pipeline level,
# allows us to remove propagation configuration.


pipeline:
  service:
    items:
    - petstore-frontend
    - petstore-backend
  environment:
    parallel: true
    items:
    - name: prod
      deploy-to: all
  stages:
  # override the service and environment
  # at the stage level.
  - service: petstore 
    environment: prod
    steps:
    - run:
        script: go build


```
