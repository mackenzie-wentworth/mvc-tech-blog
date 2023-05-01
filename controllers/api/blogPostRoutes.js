// Reference to DASHBOARD (user is able to create/update/delete personal blogposts IF/ONCE the user is logged-in)

// TODO: Import dependencies, including express 'router' and withAuth
const router = require("express").Router();
const { User, BlogPost, Comment } = require("../../models/");
const withAuth = require("../../utils/auth");

// TODO: Use express-session to store session data in a cookie

// TODO: Create new blog post (POST method with 'create')

// TODO: Update existing blog post (PUT method with 'update')

// TODO: Delete blog post (DELETE method with 'destroy')

// TODO: Export 'router'
module.exports = router;