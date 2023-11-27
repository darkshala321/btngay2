const express = require('express');
const app = express();
const port = 8000;

const postsRouter = require('./routes/posts');

app.use(express.json());

app.use('/', postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
