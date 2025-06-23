---
title: wait
---

```yaml
# example pipeline that uses the "wait" action

pipeline:
  stages:
  - steps:
    - action:
        uses: wait # invokes "wait" action template
        with:
          duration: 10m

---

# example of "wait" action template
# TODO should "wait" be a primitive type?

template:
  inputs:
    duration:
      type: duration
      default: 30s
  step:
    run: sleep ${{ inputs.duration }}

```
