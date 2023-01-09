const express = require('express');

const setupAndStartServer = async() =>{
// create the express  object

const app = express();
const PORT = 3000;

app.listen(3000, () => {
   console.log(`server started at ${PORT}`);
})

}