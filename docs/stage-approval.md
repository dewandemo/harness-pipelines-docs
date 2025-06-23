---
title: stage approval
---

```yaml
# approval stage

pipeline:
  stages:
  - steps:
    - run:
        script: echo one
    - run:
        script: echo two
  - approval:
      uses: harness
      with:
        timeout: 30m
        message: "this is an approval prompt"
        groups: [ "admins", "ops" ]
        min-approvers: 1
  - steps:
    - run:
        script: echo three
    - run:
        script: echo four


```
