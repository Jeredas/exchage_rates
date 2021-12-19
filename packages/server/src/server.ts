require('dotenv').config()
const express = require('express');
const cors = require('cors');
const ratesRouter  = require('../src/router/router');

const app = express()

const PORT = process.env.PORT || 5000;
async function start() {
    try {
        app.use(cors());
        app.options('*', cors());
        app.use('/api', ratesRouter );
        app.listen(PORT, () => {
            console.log('Server is listening on PORT:' + PORT);
        });
    } catch (e) {

    }
}
start()