require('dotenv').config();
const app = require('./app');
const config = require('./configs/config');

const port = config.port || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});