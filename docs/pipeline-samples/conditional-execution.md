---
id: pipeline-samples-conditional
sidebar_position: 3
title: Conditional Execution
---

### Pipeline with Branch Condition

```yaml
pipeline:
  if: ${{ branch == "main" }}
  stages:
    - steps:
        - run:
            script: go build
```
