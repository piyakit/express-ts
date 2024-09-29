import express from 'express';

const PORT = 8080
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    msg: 'ok',
  });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`)
})


