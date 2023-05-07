// HOMEPAGE (displays existing blogposts, does NOT require user to be logged in)
// TODO: Use express-session to store session data in a cookie

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

// TODO: If the user is logged in, allow them to view all existing blog posts from all users
// GET all BlogPosts to view on homepage (does NOT require withAuth)
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

// TODO: Option for user to click on a specific existing blog post (so the user can add a comment)
// Get one BlogPost, be sure to include it's associated User and Comments
router.get('/blogPost/:id', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['comment_body', 'date_created'],
          include: [
            {
              model: User,
              attributes: ['username']
            }
          ]
        }
      ],
    });

    const blogPost = blogPostData.get({ plain: true });

    res.render('blogPost', {
      ...blogPost,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;