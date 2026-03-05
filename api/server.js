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
app.listen(process.env.PORT || 3000, () => console.log('🛡️ ScamShield API LIVE'));
