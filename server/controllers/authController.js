import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

const secret = 'your_jwt_secret'; // Use env variable in production

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '1h' });
  res.json({ token, user: { _id: user._id, name: user.name, email: user.email } });
};

export const signout = (req, res) => {
  res.json({ message: 'Signed out successfully' });
};