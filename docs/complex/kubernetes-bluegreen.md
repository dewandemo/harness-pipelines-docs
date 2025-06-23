---
title: kubernetes bluegreen
---

```yaml
# kubernetes blue green pipeline

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

    # execute a kubernetes blue green deployment - deploys stage
    - action:
        uses: kubernetes-blue-green-deploy
        with:
          dry-run: false
          pruning: false
          update-primary-only: true
          
   # executes a blue green swap 
    - action:
        uses: kubernetes-blue-green-swap

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

    # kubernetes blue green scale down, scales the old service down to 0.
    - action:
        uses: kubernetes-blue-green-scale-down


```
