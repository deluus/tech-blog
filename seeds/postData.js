
const { Post } = require('../models');

const postData = [
    {
        title: "Happy-Habbit-Tracker!",
        post_body: "Habit Tracker is a Habit-tracker app that will allow you to track and organize your daily habits",
        user_id: 3
    },
    {
        title: "Grill Food and Friends",
        post_body: " This awesome app lets users find recipes on line based on their specific nutritional needs and allows the user to modify each search while playing some jeopardy",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_body: "A calendar application that allows a user to enter and delete events through out the day ",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_body: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 1
    },
    {
        title: "Just Tech News goes public!",
        post_body: "Just Tech News—a tech news website where users can post, upvote, and comment on links to news articles. Use Sequelize, an object-relational mapping (ORM) library, to simplify your MySQL queries, add password hashing so that users can create secure passwords, and connect your application to JawsDB, a MySQL add-on for Heroku",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;