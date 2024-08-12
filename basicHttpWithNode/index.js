const express = require('express');
const app = express();

const PORT = 3000;

app.get('/',(request,respnse)=>{
   
    respnse.json({
        name:'Priyanshu',
        message:`my name is prrs`
    })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })