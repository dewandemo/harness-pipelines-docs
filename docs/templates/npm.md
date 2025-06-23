---
title: npm
---

```yaml
# example pipeline that uses a template

pipeline:
  stages:
  - steps:
    - template:
        uses: npm
        with:
          version: 19

---

# example template definition.

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

# example template definition where the template
# defines multiple steps.

template:
  inputs:
    version:
      type: string
      default: latest
  step:
    group:
      steps:
      - run:
          container: node:${{ inputs.version }}
          script: npm install
      - run:
          container: node:${{ inputs.version }}
          script: npm test

```
