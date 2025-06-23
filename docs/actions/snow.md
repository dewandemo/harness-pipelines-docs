---
title: snow
---

```yaml
## ServiceNow Create

pipeline:
  stages:
  - steps:
    - action:
        uses: snow-create
        with: 
          connector: harness-snow #connector identifier
          ticket-type: "asset type" # Service Now Ticket Type
          type: inline | template
          description: enhancement
          short-description: # issue type
          fields:
          - name: "labels" # service field
            value: "adoption_blocker" # Value for label

         
    - action:
        uses: snow-create
        with: 
          connector: harness-snow #connector identifier
          ticket-type: "asset type" # Service Now Ticket Type
          description: enhancement
          type: template
          template: "template name" # Create from ServiceNow Template, provide id
          
## ServiceNow Update

    - action:
        uses: snow-update
        with: 
          connector: harness-snow #connector identifier
          ticket-type: enhancement # issue type
          snow-ticket-number: 1023
          type: inline | template
          description: "In Progress" # Issue Status
          short-description: "short description field" 
          fields:
          - name: "labels" # Label
            value: "adoption_blocker" # Value for label

    - action:
        uses: snow-update
        with: 
          connector: harness-snow #connector identifier
          ticket-type: enhancement # issue type
          snow-ticket-number: 1023
          type: template
          template: "template name"
          fields:
          - name: "labels" # Label
            value: "adoption_blocker" # Value for label
```
