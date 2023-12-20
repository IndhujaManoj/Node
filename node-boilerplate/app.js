const express = require('express');
const app = express();
const userRoutes = require('./src/routes/get');

app.use('/api', userRoutes); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
