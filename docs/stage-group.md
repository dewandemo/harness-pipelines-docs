---
title: stage group
---

```yaml
# stage group

pipeline:
  stages:
  - group:
      stages:
      - steps:
        - run: go build
        - run: go test
      - steps:
        - run: npm run
        - run: npm test
---

# stage group, with conditional execution

pipeline:
  stages:
  - if: ${{ branch == "main" }}
    group:
      stages:
      - steps:
        - run: go build
        - run: go test
      - steps:
        - run: npm run
        - run: npm test

```
