const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');
require('./config/db');

app.use(express.json());
app.use('/api', schoolRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
