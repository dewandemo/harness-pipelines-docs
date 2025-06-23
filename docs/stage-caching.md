---
title: stage caching
---

```yaml
# cache intelligence disabled

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    cache:
      disabled: true

---

# cache intelligence, user-defined path

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    cache:
      path: /path/to/folder

---

# cache intelligence, user-defined paths (plural)

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    cache:
      path:
      - /path/to/a/folder
      - /path/to/b/folder
      - /path/to/c/folder

---

# cache intelligence, user-defined key

pipeline:
  stages:
  - steps:
    - run:
        script: go build
    cache:
      path: /path/to/folder
      key: build.${{ branch }}

```
