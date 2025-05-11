import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = crypto.randomBytes(64).toString('hex');
    
  
    res.status(200).json({ token });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
