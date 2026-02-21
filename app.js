const express = require('express');
const app = express();
const port = 3000;


const articleRoutes = require('./routes/articleRoute');
const userRouter = require('./routes/userRouter');

app.use('/articles', articleRoutes);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
