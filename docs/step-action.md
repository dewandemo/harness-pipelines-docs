---
title: step action
---

```yaml
# simple github action step.

pipeline:
  stages:
  - steps:
    - action:
        uses: docker-build-push-action
        with:
          push: true
          tags: latest
          repo: harness/hello-world

---

# harness action (previously native steps in palette).
# This demonstrates how we can port all Harness steps to Actions.

pipeline:
  stages:
  - steps:
    - action:
        uses: http # formerly `type: Http`
        with:
          url: https://company.com
          method: POST
          inputs: []
          outputs: []

```
