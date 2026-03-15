const express = require('express');
const app = express();
const port = 3000;

const { logRequest } = require('./middleware/authMiddleware');
app.use(logRequest);
const articleRoutes = require('./routes/articleRoute');
const userRouter = require('./routes/userRouter');


app.use(express.json());
app.use('/articles', articleRoutes);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use((err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
