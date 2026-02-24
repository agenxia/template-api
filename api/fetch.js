import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { url, method = 'GET', headers = {}, data } = req.body;
  if (!url) {
    return res.status(400).json({ success: false, error: 'URL is required' });
  }
  try {
    const response = await axios({ url, method: method.toLowerCase(), headers, data, timeout: 30000 });
    res.status(200).json({ success: true, data: { status: response.status, data: response.data } });
  } catch (error) {
    res.status(error.response?.status || 500).json({ success: false, error: error.message });
  }
}
