---
title: step run test
---

```yaml
# simple run-test step.

pipeline:
  stages:
  - steps:
    - run-test:
        container: maven
        script: mvn test

---

# run-test step, with report

pipeline:
  stages:
  - steps:
    - run-test:
        script: mvn test
        report:
          type: junit
          path: /path/to/junit.xml

---

# run-test step, with multiple report (even possible?)

pipeline:
  stages:
  - steps:
    - run-test:
        script: mvn test
        report:
        - type: junit
          path: /path/to/backend/junit.xml
        - type: junit
          path: /path/to/frontend/junit.xml

---

# run-test step, with test globbing

pipeline:
  stages:
  - steps:
    - run-test:
        script: mvn test
        match:
        - tests/**/*.java
---

# run-test step, with user-define splitting

pipeline:
  stages:
  - steps:
    - run-test:
        script: mvn test
        splitting:
          concurrency: 4
---

# run-test step, with test-splitting disabled

pipeline:
  stages:
  - steps:
    - run-test:
        script: mvn test
        splitting:
          disabled: true
---

# run-test step, with test-intelligence disabled

pipeline:
  stages:
  - steps:
    - run-test:
        script: mvn test
        intelligence:
          disabled: true

```
