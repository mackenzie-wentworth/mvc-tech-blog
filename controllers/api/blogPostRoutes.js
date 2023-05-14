// Relative to DASHBOARD --> user is able to create/update/delete personal blogposts IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { User, BlogPost, Comment} = require("../../models/");
const withAuth = require('../../utils/auth');

// TODO: GET method for "+New Post" button that allows user to create/add a new blog post from the main page of the dashboard
router.get('/new', withAuth, (req, res) => 
    res.render('newPost')
    );


router.post('/', withAuth, async (req, res) => {
    try {
      const newBlogPost = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlogPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// TODO: GET method for option to click on a personal existing blog post to "EDIT" their post (the "EDIT" option will take them to a new page where the user can either UPDATE or DELETE the selected post by id)

module.exports = router;