
const express = require('express');
const userController = require('../controller/userController').registerUser


// const Route = express.Router();
const router = express.Router();
// Route.route("/api").post(userController)

// const getUsers = (req, res) => {
//     res.json({ message: "Get all users" });
//   };
  
//   const createUser = (req, res) => {
//     console.log("This is the request body received from client : ", req.body);
//     res.json({ message: "Create new user" });
//   };
  
// //   router.use(fakeAuth);
//   router.route("/").get(getUsers).post(createUser);
// Route.route('/' , userController , function(req,res) {

// });
// routes.post('/login', authUser);

module.exports = router;

