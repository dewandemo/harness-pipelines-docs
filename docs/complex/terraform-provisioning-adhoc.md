---
title: terraform provisioning adhoc
---

```yaml
# Terraform Ad Hoc Provisioning pipeline

pipeline:
  inputs:
    skip_dry_run:
      type: boolean
      default: false

  stages:
  - service: petstore
    environment: prod
    steps:
    # download manifest related to defines service.
    - action:
        uses: manifest-download
    # apply manifest templates.
    - action:
        uses: manifest-bake
    # execute a kubernetes apply dry run.
    - action:
        uses: terraform-provisioner
        with:
          plan: true
          command: apply
          provisioner: <+service.name>-<+env.name>
          secret-store: "Harness Secrets Manager"
          workspace: #optional
          aws-auth: #optional
          region: #optional
          role-arn: #optional
    # approve deployment.
    - approval:
        uses: harness
        with:
          timeout: 30m
          message: "this is an approval prompt"
          groups: [ "admins", "ops" ]
          auto-reject: true
          self-approval: false
          print-execution-history: true
          min-approvers: 1
    - action:
        uses: terraform-provisioner
        with:
          plan: false
          command: apply
          provisioner: <+service.name>-<+env.name>
          secret-store: "Harness Secrets Manager"
          workspace: #optional
          aws-auth: #optional
          region: #optional
          role-arn: #optional
          inherit-plan: true
          encrypt-plan-json: false #optional
          args: #optional
            apply: -some-command
    - action:
        uses: terraform-provisioner
        with:
          plan: false
          command: destroy
          provisioner: <+service.name>-<+env.name>
          secret-store: "Harness Secrets Manager"
          workspace: #optional
          aws-auth: #optional
          region: #optional
          role-arn: #optional
          inherit-plan: true
          encrypt-plan-json: false #optional
          args: #optional
            apply: -some-command

```
