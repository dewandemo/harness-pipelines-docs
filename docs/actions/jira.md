---
title: jira
---

```yaml
## JIRA Create

pipeline:
  stages:
  - steps:
    - action:
        uses: jira-create
        with: 
          connector: harness-jira #connector identifier
          project: cds #Jira project ID
          type: enhancement # issue type
          fields:
          - name: "labels" # JIRA Label
            value: "adoption_blocker" # Value for label
    

## JIRA Update

  - steps:
    - action:
        uses: jira-update
        with: 
          connector: harness-jira #connector identifier
          type: enhancement # issue type
          status: "In Progress" # Issue Status
          status-transition: "Invalid" 
          fields:
          - name: "labels" # JIRA Label
            value: "adoption_blocker" # Value for label
```
