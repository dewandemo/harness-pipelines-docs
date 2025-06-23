---
title: helm deploy
---

```yaml
- action:
    uses: helm-deploy
    with:
      timeout: 10m             #(optional - default is 10m)
      steady-state-check: true  # (optional - default is false)
      ignore-failures: false    # (optional - default is false)

```
