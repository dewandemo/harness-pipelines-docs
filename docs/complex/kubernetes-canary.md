---
title: kubernetes canary
---

```yaml
# kubernetes Canary Deployment pipeline

pipeline:
  inputs:
    skip_dry_run:
      type: boolean
      default: false

  stages:
  - service: petstore
    environment: prod
    steps:
    # download manifest related to defines service.
    - action:
        uses: manifest-download
    # apply manifest templates.
    - action:
        uses: manifest-bake
    # execute a kubernetes canary deployment
    - action:
        uses: kubernetes-canary-deploy
        with:
          count-type: instances | percentage
          weight: 5 | 10% 
          dry-run: false
   # executes a canary delete 
    - action:
        uses: kubernetes-canary-delete
        with:
          dry-run: false
    # approve deployment.
    - approval:
        uses: harness
        with:
          timeout: 30m
          message: "this is an approval prompt"
          groups: [ "admins", "ops" ]
          auto-reject: true
          self-approval: false
          print-execution-history: true
          min-approvers: 1
    # kubernetes apply with rolling deploy strategy.
    - action:
        uses: kubernetes-rolling-deploy
        with:
          dry-run: ${{ inputs.skip_dry_run }}
          dry-run-before-deploy: false
    # kubernetes delete / cleanup
    - action:
        uses: kubernetes-delete
        with:
          manifest: path/to/manifest
          release: release-name
          resource: resource-name
          namespace: true
```
