const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');


async function registerUser (req, res) {
    const {userName, email, password} = req.body;

    try {
        const user = await userModel.create({
            userName: userName,
            email: email,
            password: password
        });
        const token = jwt.sign({
            id: user._id  
        }, process.env.JWT_SECRET)

        res.cookie("token", token);

        res.status(201).json({
            message: "User registered successfully",
            user,
        })
    } catch (err) {
        console.log("Failed to register User");
    }


}

module.exports = {registerUser};