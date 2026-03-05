const express = require('express');
const app = express();
app.use(express.json());

app.post('/scan', (req, res) => {
  const { url } = req.body;
  const safe = url.includes('wa.me/91');
  res.json({
    safe,
    message: safe ? '✅ SAFE WhatsApp' : '⚠️ RISKY',
    timestamp: new Date().toISOString()
  });
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`🛡️ ScamShield API LIVE on http://0.0.0.0:${port}`);
});
