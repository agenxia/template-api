const cache = new Map();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (req.query.key) {
      const value = cache.get(req.query.key);
      return res.status(200).json({ success: true, data: { key: req.query.key, value, exists: value !== undefined } });
    }
    return res.status(200).json({ success: true, data: { keys: cache.size } });
  }
  if (req.method === 'DELETE' && req.query.key === 'all') {
    cache.clear();
    return res.status(200).json({ success: true, message: 'Cache cleared' });
  }
  res.status(405).json({ error: 'Method not allowed' });
}
