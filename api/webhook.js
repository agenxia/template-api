export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const webhook_id = `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  res.status(200).json({
    success: true,
    webhook_id,
    message: 'Webhook received and processed',
    timestamp: new Date().toISOString(),
  });
}
