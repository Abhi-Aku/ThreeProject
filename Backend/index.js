const express = require('express')
require('./db')
const cors=require ('cors')
const app = express()

const port = 3000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const userRouter = require('./Routers/UserRouter');
app.use("/api",userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})