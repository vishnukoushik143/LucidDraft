import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../models/User.js";

import { JWT_EXPIRATION } from "../../costants.js";

async function loginController(req, res) {
    // console.log("Login Request Noted \n");
    // console.log(req.body);
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(401)
                .json({ message: "Invalid email or password" });
        }

        const isValidPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isValidPassword) {
            return res
                .status(401)
                .json({ message: "Invalid email or password" });
        }

        const jwt_token = await jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: JWT_EXPIRATION,
            }
        );

        return res
            .cookie("token", jwt_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                // sameSite: "strict",
                maxAge: JWT_EXPIRATION,
            })
            .status(200)
            .json({ message: "Login successful", user });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default loginController;
