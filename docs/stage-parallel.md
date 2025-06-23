---
title: stage parallel
---

```yaml
# parallel stage group

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

# parallel stage group, with conditional execution

pipeline:
  stages:
  - if: ${{ branch == "main" }}
    parallel:
      stages:
      - steps:
        - run: go build
        - run: go test
      - steps:
        - run: npm run
        - run: npm test

```
