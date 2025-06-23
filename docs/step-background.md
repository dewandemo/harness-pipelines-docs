---
title: step background
---

```yaml
# background step (short syntax)

pipeline:
  stages:
  - steps:
    - background:
        container: redis
    - run:
        script: go test

---

# background step (long syntax)

pipeline:
  stages:
  - steps:
    - background:
        container:
          image: redis
          ports:
            - 80:80
    - run:
        script: go test
---

# background step, run script

pipeline:
  stages:
  - steps:
    - background:
        script: npm run start
    - run:
        script: npm test

```
