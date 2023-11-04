const express = require('express');
const bodyParser = require('body-parser');
const {PORT,SYNC} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index');
const {db} = require('./models/index');

const prepareAndStartServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    
    app.use('/api',ApiRoutes);
    app.listen(PORT,async ()=>{
        if(SYNC){
            db.sequelize.sync({alter:true});
        }
        console.log(`server is up and running at ${PORT}`);
    })
}
prepareAndStartServer();
