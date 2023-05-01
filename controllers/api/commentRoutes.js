// Reference to HOMEPAGE (able to add a comment to any blogpost IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// TODO: Use express-session to store session data in a cookie

// TODO: Comment on a blog post (POST method with 'create')
router.post("/", withAuth, (req, res) => {
    Comment.create({ ...req.body, user_id: req.session.user_id })
        .then(commentData => {
            res.json(commentData);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// TODO: Export 'router'
module.exports = router;

