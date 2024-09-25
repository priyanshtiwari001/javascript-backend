const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

// express kuch ni krta humne explicit bolna pta h ki bhai please usko json ke format main padho
app.use(express.json());
app.use(express.urlencoded({extended:true})) // they are like special characters that are particularly uncoded in something example space -> %20;
// {extended:true} -> The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). qs-> helps to parase in nested object where queryString cannot parse nested object instead it present in [] format.

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
