require('dotenv').config()
const express = require('express');
const cors = require('cors');
const valuesRouter  = require('./router/router.ts');

const app = express()

const PORT = process.env.PORT || 5000;
async function start(): Promise<void> {
    try {
        app.use(cors());
        app.options('*', cors());
        app.use('', valuesRouter);
        app.listen(PORT, () => {
            console.log(process.env.NODE_ENV);
            console.log('Server is listening on PORT:' + PORT);
        });
    } catch (e) {
        console.log(e);

    }
}

start()