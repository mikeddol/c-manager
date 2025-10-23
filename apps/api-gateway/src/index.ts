import express from 'express';
import cors from 'cors';
import { User } from '@c-manager/shared-types';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

app.get('/api/users', (req, res) => {
  const mockUser: User = {
    id: '1',
    email: 'test@example.com',
    username: 'testuser',
    role: 'player',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  res.json([mockUser]);
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});