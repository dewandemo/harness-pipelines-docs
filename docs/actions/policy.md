---
title: policy
---

```yaml
# example pipeline that uses the "policy" action

pipeline:
  stages:
  - steps:
    - action:
        uses: policy
        with:
          type: custom
          timeout: 10m
          name: namespace-validator
          payload: |
            {"name": "<+infra.name>"}
         

```
