// TODO: Import dependencies, including sequelize
const sequelize = require("../config/connection")
const {User, BlogPost, Comment} = require("../models")

// TODO: Create seedDatabase 'async/await' function
const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
// const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await userData();
    await blogPostData();
    // await commentData();
    process.exit(0);
  };
  

// TODO: Call seedDatabase() function
seedDatabase();