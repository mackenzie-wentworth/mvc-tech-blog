// Prompt user to SIGN IN, SIGN UP, LOGOUT

// TODO: Import dependencies, including express 'router' 
const router = require("express").Router();
const { User } = require("../../models/");

// TODO: Use express-session to store session data in a cookie

// TODO: Create new user (POST method with 'create') --> "sign-up"
router.post("/", (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(userData => {
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.username = userData.username;
                req.session.logged_in = true;

                res.json(userData);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// TODO: User /login route (POST method with 'findOne') --> "sign-in"
// checkPassword
router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user account found!' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password! Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    });
});

// TODO: User /logout route (POST method with 'destroy') --> "logout"
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

// TODO: Export 'router'
module.exports = router;
