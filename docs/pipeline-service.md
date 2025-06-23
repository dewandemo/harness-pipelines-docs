---
title: pipeline service
---

```yaml
# sample pipeline with pipeline-level service and
# environment.
# 
# NOTE that service and environment are also supported
# at the stage level. See ./stage.yaml

pipeline:
  service: petstore
  environment: prod
  stages:
  - steps:
    - go build

---

# sample pipeline with pipeline-level multi-service
# and multi-environment.

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
    - name: stage
      deploy-to:
      - infra1
      - infra2
    - name: dev
      deploy-to: infra3
  stages:
  - steps:
    - go build

```
