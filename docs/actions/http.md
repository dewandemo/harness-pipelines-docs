---
title: http
---

```yaml
# example pipeline that uses the "http" action

pipeline:
  stages:
  - steps:
    - action:
        uses: http # SELECT * FROM templates WHERE template_id = 'http'
        with:
          method: GET
          endpoint: https://acme.com

---

# example of "http" action template where the action
# is a simple "run" step.

template:
  inputs:
    method:
      type: string
      enum:
        - GET
        - HEAD
        - POST
        - PUT
        - DELETE
        - PATCH
      default: POST
  step:
    run: curl -X ${{ inputs.method }} ${{ inputs.endpoint }}

---

# example of "http" action template where the action
# is a container step.

template:
  inputs:
    method:
      type: string
      enum:
        - GET
        - HEAD
        - POST
        - PUT
        - DELETE
        - PATCH
      default: POST
  step:
    run: 
      container: plugins/http
      env:
        PLUGIN_METHOD: ${{ inputs.method }}
        PLUGIN_ENDPOINT: ${{ inputs.endpoint }}

---

# example of "http" action template that supports
# container-based execution as well as host execution (mac, windows)

template:
  inputs:
    method:
      type: string
      enum:
        - GET
        - HEAD
        - POST
        - PUT
        - DELETE
        - PATCH
      default: POST
  step:
    group:
      steps:
      - if: runtime.container == true
        run: 
          container: plugins/http
          env:
            PLUGIN_METHOD: ${{ inputs.method }}
            PLUGIN_ENDPOINT: ${{ inputs.endpoint }}
      - if: runtime.container == false
        group: 
          steps:
          - run: curl -X ${{ inputs.method }} ${{ inputs.endpoint }}

```
