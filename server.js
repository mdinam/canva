const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const path = require('path')


const app = express();
dotenv.config();

if (process.env.NODE_ENV === 'local') {
  // run this project in local enviorment
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }))
} else {
  //run this project production enviorment
  app.use(cors({
    credentials : true
  }))
}
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,"./frontend/dist")))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./","frontend","dist","index.html"))
  })
}

const dbConnect= async()=>{
try {
  if (process.env.NODE_ENV === 'local') {
    await mongoose.connect(process.env.LOCAL_DB_URI)
    console.log("Local db is connected")
  } else {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Production db is connected")
  }
} catch (error) {
  console.log("Database connection failed!")
}
}
dbConnect()

const PORT = process.env.PORT || 8080 ;
app.listen(PORT, ()=> console.log(`Server Started at Port: ${PORT}`));
