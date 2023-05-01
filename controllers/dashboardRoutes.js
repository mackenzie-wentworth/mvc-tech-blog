// DASHBOARD (displays user's personal existing blogposts IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { BlogPost } = require("../models/");
const withAuth = require("../utils/auth");

// TODO: Use express-session to store session data in a cookie

// TODO: If the user is logged in, allow user to view all existing personal blog posts
router.get("/", withAuth, (req, res) => {
    BlogPost.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(blogPostData => {
            const blogposts = blogPostData.map((post) => post.get({ plain: true }));

            res.render("admin-user-blogposts", {
                layout: "dashboard",
                blogposts
            });
        })

        // TODO: If the user is NOT logged in, redirect the user to the login page --> redirect to "sign-in/sign-up"
        .catch(err => {
            console.log(err);
            res.redirect('/login');
        });
});

// TODO: Option for user to CREATE new blog post from dashboard

// TODO: Option for user to select a specifici existing blog post to EDIT (aka to UPDATE/DELETE blog post) from dashboard



// TODO: Export 'router'
module.exports = router;