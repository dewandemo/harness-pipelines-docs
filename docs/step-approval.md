---
title: step approval
---

```yaml
# simple approval step.

pipeline:
  stages:
  - steps:
    - run: go build
    - approval:
        uses: jira
        with:
          connector: account.jira
          project: PROJ
    - run: go test

```
