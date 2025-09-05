---
id: pipeline-samples-github
sidebar_position: 6
title: GitHub Compatibility
---

### GitHub-Compatible Pipeline

```yaml
jobs:
  test:
    runs-on: ubuntu
    steps:
      - run: go build
```

### GitHub Pipeline with Harness Extensions

```yaml
jobs:
  test:
    runs-on: ubuntu
    steps:
      - run: go build
      - template:
          uses: account.docker
          with:
            repo: harness/hello-world
            tags: latest
```
