// HOMEPAGE (displays existing blogposts from all users IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { User, BlogPost, Comment } = require("../models/");

// TODO: Use express-session to store session data in a cookie

// TODO: If the user is logged in, allow them to view all existing blog posts from all users
router.get('/', (req, res) => {
    BlogPost.findAll({
        attributes: [
            'id',
            'title',
            'contents',
            'date_created',
        ],
        include: [{
            model: Comment,
            attributes: ['comment_body', 'date_created', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(blogPostData => {
            const blogposts = blogPostData.map(post => post.get({ plain: true }));
            console.log(blogposts);

            res.render('homepage', { blogposts, logged_in: req.session.logged_in });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// TODO: Option for user to click on a specific existing blog post (so the user can add a comment)
router.get('/post/:id', (req, res) => {
    BlogPost.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'contents',
            'date_created'
        ],
        include: [{
            model: Comment,
            attributes: ['comment_body', 'date_created', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    })
        .then(blogPostData => {
            if (!blogPostData) {
                res.status(404).json({ message: 'Sorry, no post found with this id!' });
                return;
            }
            const singlePost = blogPostData.get({ plain: true });
            console.log(singlePost);
            res.render('single-post', { singlePost, logged_in: req.session.logged_in });


        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// TODO: If the user is NOT logged in, redirect the user to the login page --> redirect to "sign-in/sign-up"

// TODO: Export 'router'
module.exports = router;
