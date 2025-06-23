---
title: dynamic provisioned infra
---

```yaml
pipeline:
  stages:
  - steps:
    - action: 
        uses: harness/terraform
        with:
          plan: true
          command: apply
    - action: 
        uses: harness/terraform
        with:
          plan: false
          command: apply
    - action:
        uses: harness/dynamic-environment
        with: 
          environment: "dev" 
          infrastructure: "k8s-dev"
          connector: <+terraform.output.connectorName> #connector identifier
          namespace: <+sterraform.output.namespace> #namespace
```
