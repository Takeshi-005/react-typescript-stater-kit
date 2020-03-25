import Express from 'express';
import cors from 'cors';
import path from 'path';

const app = Express();

// ______________________________________________________
//
// CORS対応
app.use(cors());

// ______________________________________________________
//
// Route

app.get('/api/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'db.json'));
});

const port = 8888;
const host = 'localhost';

app.listen(port, host, () => {
  console.log(`Running on http:://${host}:${port}`);
});
