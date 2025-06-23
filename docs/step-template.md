---
title: step template
---

```yaml
# simple template step

pipeline:
  stages:
  - steps:
    - template:
        uses: account.docker
        with:
          push: true
          tags: latest
          repo: harness/hello-world

---

# step template, with version

pipeline:
  stages:
  - steps:
    - template:
        uses: account.docker@1.0.0
        with:
          push: true
          tags: latest
          repo: harness/hello-world

---
# template definition (referenced by template step)

template:
  inputs:
    version:
      type: string
      default: latest
  step:
    run:
      container: node:${{ inputs.version }}
      script:
      - npm install
      - npm test

---

# sample github yaml, extended to support
# harness templates.

jobs:
  test:
    steps:
      - template:
          uses: account.docker
          with:
            push: true
            tags: latest
            repo: harness/hello-world

```
