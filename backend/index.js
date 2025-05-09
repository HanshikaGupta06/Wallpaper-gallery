const express = require('express')
const app = express();
const trending = require('./routes/trending.route')
const favourite = require ('./routes/favoutite.route')
const cors = require('cors');
const PORT=3000;

app.use(cors());

app.use('/api/v1/trending', trending)
app.use('/api/v1/favourite', favourite)

app.listen(PORT, () => {
    console.log("server is running on :", PORT);
})


