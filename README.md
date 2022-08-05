# kubernetes-app

A sample app to test Kubernetes resource and learn by doing

This application uses port 3000

## Useful commands

```express [PROJECT_NAME]```

```npm install```

```npm build```

```npm run```

Build multiarchitecture images
```docker buildx build -t hecha00/kubernetes-app:2.0 . --push --platform=linux/arm64,linux/amd64```