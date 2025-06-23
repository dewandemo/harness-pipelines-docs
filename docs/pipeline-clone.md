---
title: pipeline clone
---

```yaml
# pipeline with cloning disabled (short syntax)

pipeline:
  clone: false
  stages:
  - steps:
    - run:
        script: go build

---

# pipeline with cloning disabled (long syntax)

pipeline:
  clone:
    disabled: true
  stages:
  - steps:
    - run:
        script: go build

---

# pipeline with repository and clone override

pipeline:
  clone:
    depth: 50
  repo:
    connector: account.github
    name: harness/hello-world
  stages:
  - steps:
    - run:
        script: go build

---

# override default ref from trigger (short)

pipeline:
  clone:
    depth: 50
    ref: main
  repo:
    connector: account.github
    name: harness/hello-world
  stages:
  - steps:
    - run:
        script: go build

---

# override default ref from trigger (short, fully-qualified ref path)

pipeline:
  clone:
    depth: 50
    ref: refs/heads/main
  repo:
    connector: account.github
    name: harness/hello-world
  stages:
  - steps:
    - run:
        script: go build

---

# override default ref from trigger (long)

pipeline:
  clone:
    depth: 50
    ref:
      name: main
      type: branch
  repo:
    connector: account.github
    name: harness/hello-world
  stages:
  - steps:
    - run:
        script: go build

---

# pipeline with custom cloning per stage (short)

pipeline:
  stages:
  - clone: false
    steps:
    - run:
        script: go build

---

# pipeline with custom cloning per stage (long)

pipeline:
  stages:
  - clone:
      insecure: true
      trace: true
    steps:
    - run:
        script: go build

```
