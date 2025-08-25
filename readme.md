docker build -t node-hello:0.1.0 .

kind load docker-image node-hello:0.1.0 --name argocd-poc