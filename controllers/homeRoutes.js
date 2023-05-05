// HOMEPAGE (displays existing blogposts, does NOT require user to be logged in)

const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//       res.render('homepage');
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


// GET all Blogposts to view on homepage (does NOT require withAuth)
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('homepage', { 
      blogPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: Use express-session to store session data in a cookie

// Get one blog post, be sure to include it's associated User and Comments


module.exports = router;