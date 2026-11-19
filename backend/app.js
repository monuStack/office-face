const express  = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main().then(()=>console.log('mongodb connected'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



app.get('/',(req,res)=>{
    res.send("i m get req")
})

app.post('/user/signup',(req,res)=>{
  console.log(req.body)
  res.send("i m post method")
})


app.listen(port, () => {
  console.log('Server is running on http://localhost:8000')
})