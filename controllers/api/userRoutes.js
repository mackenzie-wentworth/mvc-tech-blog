// Prompt user to SIGN IN, SIGN UP, LOGOUT

// // TODO: Import dependencies, including express 'router' 
const router = require("express").Router();
const { User, BlogPost, Comment} = require("../../models/");

// Get ALL users
router.get('/', async (req, res) => {
  try {
      const users = await User.findAll({
        attributes: { exclude: ['password'] },
      })
      res.status(200).json(users)
  } catch (err) {
      res.status(500).json(err)
  }
})
// // Use express-session to store session data in a cookie

// // TODO: Create new user (POST method with 'create') --> "sign-up"
// router.post("/", (req, res) => {
//     User.create({
//         username: req.body.username,
//         password: req.body.password
//     })
//         .then(userData => {
//             req.session.save(() => {
//                 req.session.user_id = userData.id;
//                 req.session.username = userData.username;
//                 req.session.logged_in = true;

//                 res.json(userData);
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// // TODO: User /login route (POST method with 'findOne') --> "sign-in"
// checkPassword
// router.post("/login", (req, res) => {
//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     }).then(userData => {
//         if (!userData) {
//             res.status(400).json({ message: 'No user account found!' });
//             return;
//         }

//         const validPassword = userData.checkPassword(req.body.password);

//         if (!validPassword) {
//             res.status(400).json({ message: 'Incorrect password! Please try again!' });
//             return;
//         }

//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.username = userData.username;
//             req.session.logged_in = true;

//             res.json({ user: userData, message: 'You are now logged in!' });
//         });
//     });
// });

// // TODO: User /logout route (POST method with 'destroy') --> "logout"
// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         });
//     }
//     else {
//         res.status(404).end();
//     }
// });

// // TODO: Export 'router'
// module.exports = router;


// -------------------------------------------------------------------------------------

// const router = require('express').Router();
// const { User, BlogPost, Comment } = require('../../models');

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { username: req.body.username } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect username or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });


router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
