// Relative to DASHBOARD --> user is able to create/update/delete admin (personal) blogposts IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { User, BlogPost, Comment } = require("../../models/");
const withAuth = require('../../utils/auth');

// TODO: GET method to display all existing admin (personal) blog posts from user to Dashboard page
router.get('/', withAuth, (req, res) => {
  BlogPost.findAll({
    where: {
      user_id: req.session.user_id
    }
  })
    .then(dbAdminData => {
      const blogPosts = dbAdminData.map((blogPost) => blogPost.get({ plain: true }));

      res.render('dashboard', {
        blogPosts,
        logged_in: req.session.logged_in,
      });
    })
    .catch(err => {
      console.log(err);

    });
});



// POST method to create a NEW blog post (from clicking "+New Post" button first, then user fills out user data for newFormHandler, followed by clicking the "Create" button to populate the NEW created blogpost)
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } 
  catch (err) {
    res.status(400).json(err);
  }
});

// *** UPDATE blog post by id ****
router.put("/:id", withAuth, (req, res) => {
  BlogPost.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(updatedPost => {
      if (updatedPost > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// // *** DELETE blog post by id ****
router.delete("/:id", withAuth, (req, res) => {
  BlogPost.destroy({
      where: {
          id: req.params.id
      }
  })
      .then(deletedPost => {
          if (deletedPost > 0) {
              res.status(200).end();
          } else {
              res.status(404).end();
          }
      })
      .catch(err => {
          res.status(500).json(err);
      });
});

module.exports = router;