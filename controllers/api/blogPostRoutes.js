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

// TODO: GET method for the "Edit Blog Post" page once a user clicks on an existing blogpost (the "EDIT" option will take them to a new page where the user can either UPDATE or DELETE the selected post by id)
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatePost = await BlogPost.update(req.body, {
      where: {
        id: req.params.id
      },
    });

    if (!updatePost) {
      res.status(404).json({
        message: `Sorry, no record exists of a blog post with the id: ${req.params.id}`
      });
      return;
    }
    console.log(req.body)
    console.log(req.params.id)
    console.log(updatePost)
    res.status(200).json(updatePost);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const deletePost = await BlogPost.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!deletePost) {
//       res.status(404).json({ message: `Sorry, no record exists of a blog post with the id: ${req.params.id}` });
//       return;
//     }

//     res.status(200).json(deletePost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;