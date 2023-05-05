// HOMEPAGE (displays existing blogposts, does NOT require user to be logged)

const router = require('express').Router();
// const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
  });

// router.get('/', async (req, res) => {
//   try {
//     // Get all blogposts and JOIN with user data
//     const blogPostData = await BlogPost.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//       ],
//     });

//     // Serialize data so the homepage template can read it
//     const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     // Renders the 'homepage' handlebars page under 'VIEWS' folder
//     res.render('homepage', { 
//       blogPosts, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Get one blog post, be sure to include it's associated User and Comments
// router.get('/blogPost/:id', async (req, res) => {
//   try {
//     const blogPostData = await BlogPost.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         },
//         { model: Comment, 
//             include: [{ model: User, attributes: ['username']}]
//         }
//       ],
//     });

//     const blogPost = blogPostData.get({ plain: true });

//     res.render('blogPost', {
//       ...blogPost,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route (direct user to Dashboard page once they are logged in)
// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: BlogPost }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;