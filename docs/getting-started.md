---
title: Get started
description: Get started with Harness pipeline syntax
sidebar_position: 20
sidebar_label: Get Started
---

# Getting Started with Harness Pipelines

Welcome to Harness Pipelines! This guide will walk you through creating your first pipeline and understanding the basic concepts.

## What are Harness Pipelines?

Harness Pipelines are YAML-based CI/CD workflows that help you automate your software delivery process. They can:

- Build and test your code automatically
- Deploy applications to different environments
- Run security scans and quality checks
- Orchestrate complex multi-service deployments

## Prerequisites

Before you start, make sure you have:

- A Harness account set up
- Access to a Git repository
- Basic understanding of YAML syntax

## Your First Pipeline

Let's create a simple pipeline that builds and tests a Go application:

```yaml
pipeline:
  on:
    - push:
        branches:
          - main
    - pull_request:
        branches:
          - main

  stages:
    - name: build
      steps:
        - run:
            script: go build
            container: golang:1.20

    - name: test
      steps:
        - run:
            script: go test ./...
            container: golang:1.20
```

This pipeline:

1. **Triggers** on pushes and pull requests to the main branch
2. **Builds** your Go application in a container
3. **Tests** your code to ensure quality

## Key Concepts

### Stages

Stages are the main building blocks of your pipeline. Each stage represents a logical phase of your workflow (build, test, deploy, etc.).

### Steps

Steps are the individual actions within a stage. The most common step type is `run`, which executes commands.

### Triggers

Triggers define when your pipeline runs. Common triggers include:

- `push` - Runs when code is pushed to the repository
- `pull_request` - Runs when a pull request is created or updated

### Containers

Containers provide isolated environments for your steps. They ensure consistent execution across different environments.

## Next Steps

1. **Learn the Essentials**: Check out the [Pipeline Syntax — Essentials](./pipeline-syntax-essentials) guide for a deeper dive into the most commonly used features.

2. **Explore Examples**: Look at the complete example in the Essentials guide to see how all the pieces fit together.

3. **Reference Documentation**: When you're ready for advanced features, consult the [Pipeline Syntax Reference](./pipeline-syntax-reference) for the complete specification.

## Common Patterns

### Multi-language Support

```yaml
pipeline:
  on: push
  stages:
    - name: build
      steps:
        - run:
            script: npm install && npm run build
            container: node:18
```

### Environment Variables

```yaml
pipeline:
  env:
    NODE_ENV: production
  stages:
    - steps:
        - run:
            script: echo "Building for $NODE_ENV"
```

### Conditional Execution

```yaml
pipeline:
  stages:
    - name: deploy
      if: ${{ branch == "main" }}
      steps:
        - run:
            script: echo "Deploying to production"
```

## Need Help?

- Check the [Essentials Guide](./pipeline-syntax-essentials) for practical examples
- Refer to the [Reference Documentation](./pipeline-syntax-reference) for complete syntax
- Join our community forums for support and best practices

Happy building! 🚀
