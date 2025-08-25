const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || '0.1.0';

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from ArgoCD + Node.js!',
    version: VERSION,
    hostname: os.hostname(),
    time: new Date().toISOString()
  });
});

app.get('/healthz', (_req, res) => res.status(200).send('ok'));
app.get('/readyz', (_req, res) => res.status(200).send('ready'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
