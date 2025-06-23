---
title: stage volumes
---

```yaml
# bind volume

pipeline:
  stages:
  - steps:
    - run:
        script: go build
        container:
          volumes:
            - source: docker
              target: /var/run/docker.sock
    volumes:
    - name: docker
      uses: bind
      with:
        path: /var/run/docker.sock

---

# temp volume

pipeline:
  stages:
  - steps:
    - run:
        script: go build
        container:
          volumes:
            - source: home
              target: /go
    volumes:
    - name: home
      uses: temp

```
