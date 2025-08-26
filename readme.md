docker build -t node-hello:0.1.2 .

kind load docker-image node-hello:0.1.2 --name argocd-poc

kubectl apply -f argocd/application.yaml

kubectl -n argocd get application node-hello -o wide


curl -H 'Host: app.127.0.0.1.nip.io:8880' http://127.0.0.1:8880/


git add .
git commit -m "bump app to 0.1.1"
git push