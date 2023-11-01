const express = require('express');
const {PORT} = require('./config/serverConfig')
const app = express();

const prepareAndStartServer = ()=>{
    app.listen(PORT,()=>{
        console.log(`server is up and running at ${PORT}`);
    })
}
prepareAndStartServer();
