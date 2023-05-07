// Prompt user to SIGN IN, SIGN UP, LOGOUT

// // TODO: Import dependencies, including express 'router' 
const router = require("express").Router();
const { User, BlogPost, Comment} = require("../../models/");

// router.get('/', async (req, res) => {
//   try {
//     res.render('homepage');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
// TODO: Create new user (POST method with 'create') --> "sign-up"

// TODO: User /login route (POST method with 'findOne') --> "sign-in"
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Sorry, incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Sorry, incorrect username or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: User /logout route (POST method with 'destroy') --> "logout"







module.exports = router;
