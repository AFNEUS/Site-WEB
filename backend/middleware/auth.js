import jwt from 'jsonwebtoken';

/**
 * Middleware pour vérifier le JWT
 * Extrait l'utilisateur du token et l'ajoute à req.user
 */
export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // "Bearer TOKEN"

    if (!token) {
      return res.status(401).json({ error: 'Token manquant' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalide', message: err.message });
  }
};

/**
 * Middleware pour vérifier que l'utilisateur est super-admin
 */
export const requireSuperAdmin = (req, res, next) => {
  if (req.user?.role !== 'super-admin') {
    return res.status(403).json({ error: 'Accès refusé: super-admin required' });
  }
  next();
};

/**
 * Middleware pour vérifier que l'utilisateur est bureau ou super-admin
 */
export const requireBureau = (req, res, next) => {
  if (!['super-admin', 'bureau'].includes(req.user?.role)) {
    return res.status(403).json({ error: 'Accès refusé: bureau required' });
  }
  next();
};

/**
 * Middleware pour vérifier que l'utilisateur est asso-admin ou super-admin
 */
export const requireAssoAdmin = (req, res, next) => {
  if (!['super-admin', 'asso-admin'].includes(req.user?.role)) {
    return res.status(403).json({ error: 'Accès refusé: asso-admin required' });
  }
  next();
};

/**
 * Génère un JWT
 */
export const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};
