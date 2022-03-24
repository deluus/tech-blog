const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Great Work"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Looks and works great!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "All praise"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "This is taking off!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Cant wait for the future"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "I like turtles!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;