const { User } = require('../models');

const userData = [
    {
        username: "stevenseagull",
        email: "stevenseagullgmail.com",
        password: "password"
    },
    {
        username: "AngelinaJolie",
        email: "AngelinaJoliegmail.com",
        password: "password"
    },
    {
        username: "shaunofthedead",
        email: "shaunofthedead@gmail.com",
        password: "password"
    },
    {
        username: "deluus",
        email: "deluus@gmail.com",
        password: "password"
    },

  
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;