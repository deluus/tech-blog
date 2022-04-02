const { User } = require('../models');

const userData = [
    {
        username: "stevenseagull",
        email: "stevenseagull@gmail.com",
        password: "password"
    },
    {
        username: "AngelinaJolie",
        email: "AngelinaJoliegmail.com",
        password: "password1"
    },
    {
        username: "shaunofthedead",
        email: "shaunofthedead@gmail.com",
        password: "password2"
    },
    {
        username: "deluus",
        email: "deluus@gmail.com",
        password: "password3"
    },

  
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;