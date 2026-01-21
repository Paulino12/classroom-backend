import express from 'express';
import cors from 'cors';
import subjectsRouter from './routes/subjects';

const app = express();
const port = 8000;
//
// if(!process.env.DATABASE_URL)
//   throw new Error(
//     'DATABASE_URL is not set in .env file'
//   )

app.use(cors({
  origin: process.env.FRONTEND_URL || false,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get('/', (req, res) => {
  res.send('Hello from Classroom Backend!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
