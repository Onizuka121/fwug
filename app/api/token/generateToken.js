import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Genera un token casuale
    const token = crypto.randomBytes(64).toString('hex');
    
    // Puoi memorizzare questo token in un database, Redis, o in sessione, per validare successivamente
    // Esempio: salva il token in sessione o in un cookie HTTP-Only

    res.status(200).json({ token });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
