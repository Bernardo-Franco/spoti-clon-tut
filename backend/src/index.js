import express from 'express';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express';
import fileupload from 'express-fileupload';
import path from 'path';
import cors from 'cors';
import { initializeSocket } from './lib/socket.js';

dotenv.config();
const PORT = process.env.PORT || 5001;

import { connectDB } from './lib/db.js';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import adminRoutes from './routes/admin.route.js';
import songRoutes from './routes/songs.route.js';
import albumRoutes from './routes/album.route.js';
import statsRoutes from './routes/stats.route.js';
import { createServer } from 'http';

const __dirname = path.resolve();
const app = express();

const httpServer = createServer(app);
initializeSocket(httpServer);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(clerkMiddleware());
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'tmp'),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB max file size
    },
  })
);

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/stats', statsRoutes);

//Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message:
      process.env.NODE_ENV !== 'production'
        ? err.message
        : 'Internal Server Error',
  });
});

httpServer.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
  connectDB();
});

// todo: implement socket.io
