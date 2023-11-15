
const express = require('express');
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const UserModel=require('./models/User')

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://angelbelangel:angel@cluster0.zdy2k51.mongodb.net/angeldb")

const secretKey = 'mySecretKey';
const saltRounds = 10; 




// Registration endpoint
app.post('/users/register', async (req, res) => {
  UserModel.create(req.body)
  .then(users =>res.json(users))
  .catch(err =>res.json(err))




  // const { username, password } = req.body;

  // // Check if username already exists
  // if (users.some((user) => user.username === username)) {
  //   return res.status(400).json({ message: 'Username already exists' });
  // }

  // // Hash the password

  // // add  new user to the array
  // const newUser = {
  //   id: users.length + 1,
  //   username,
  //   password ,
  // };
  // users.push(newUser);

  // console.log('users',users)

  // console.log('users',users)

  // res.status(201).json({ message: 'User registered successfully' });
});



// login endpoint
app.post('/users/login', async (req, res) => {
 const {username,password}=req.body;
 UserModel.findOne({username:username})
 .then(user=>{
  if(user){
    if(user.password){
    res.json("Success")
    }else{
      res.json("the password is incorrect")
    }
  }else{
    res.json("No record existed")
  }
 })







  // Find the user by username
//   const user = users.find((user) => user.username === username);

//   if (!user) {
//     return res.status(401).json({ message: 'Invalid username or password 1' });
//   }

// bcrypt.compare(password,user.password, (err, result) =>{
//   if(result){
//   // Create a JWT token
//   const token = jwt.sign({ username }, secretKey, { expiresIn: '1d' });
//   res.json({ token });
//   }
//   else
//     return res.status(401).json({ message: 'Invalid username or password 1' });
// });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});









































// const express = require('express');
// const mongoose=require('mongoose');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const UserModel=require('./models/User')

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://angelbelangel:angel@cluster0.zdy2k51.mongodb.net/angeldb")

// const secretKey = 'mySecretKey';
// const saltRounds = 10; 

// const users=[];


// // Registration endpoint
// app.post('/users/register', async (req, res) => {
//   const { username, password } = req.body;

//   // Check if username already exists
//   if (users.some((user) => user.username === username)) {
//     return res.status(400).json({ message: 'Username already exists' });
//   }

//   // Hash the password

//   // add  new user to the array
//   const newUser = {
//     id: users.length + 1,
//     username,
//     password ,
//   };
//   users.push(newUser);

//   console.log('users',users)

//   console.log('users',users)

//   res.status(201).json({ message: 'User registered successfully' });
// });



// // login endpoint
// app.post('/users/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Find the user by username
//   const user = users.find((user) => user.username === username);

//   if (!user) {
//     return res.status(401).json({ message: 'Invalid username or password 1' });
//   }

// bcrypt.compare(password,user.password, (err, result) =>{
//   if(result){
//   // Create a JWT token
//   const token = jwt.sign({ username }, secretKey, { expiresIn: '1d' });
//   res.json({ token });
//   }
//   else
//     return res.status(401).json({ message: 'Invalid username or password 1' });
// });

// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




















