// Reference to DASHBOARD (user is able to create/update/delete personal blogposts IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { BlogPost } = require("../../models/");
const withAuth = require("../../utils/auth");

// TODO: Use express-session to store session data in a cookie

// TODO: CREATE new blog post (POST method with 'create')
router.post('/', withAuth, (req, res) => {
    BlogPost.create({
        title: req.body.title,
        contents: req.body.contents,
        date_created: req.body.date_created,
        user_id: req.session.user_id
    })
        .then(blogPostData => res.json(blogPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// TODO: UPDATE existing blog post (PUT method with 'update')
router.put('/:id', withAuth, (req, res) => {
    // Update multiple instances that match the where options
    BlogPost.update({
        title: req.body.title,
        contents: req.body.contents
    },
        {
            where: {
                id: req.params.id
            }
        }).then(blogPostData => {
            if (!blogPostData) {
                res.status(404).json({ message: 'Sorry, no blog post found with this id!' });
                return;
            }
            res.json(blogPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// TODO: DELETE blog post (DELETE method with 'destroy')
router.delete('/:id', withAuth, (req, res) => {
    // Delete multiple instances, in this case just where the id has been selected. On a post/:id page, clicking the delete button will trigger the front end form that will ship a delete request back here
    BlogPost.destroy({
        where: {
            id: req.params.id
        }
    }).then(blogPostData => {
        if (!blogPostData) {
            res.status(404).json({ message: 'Sorry, no blog post found with this id!' });
            return;
        }
        res.json(blogPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// TODO: Export 'router'
module.exports = router;