import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import User from "../../models/User.js";

async function loginStatusController(req, res) {
    try {
        const token = req.cookies.token;
        console.log("Token received:", token);
        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized", isAuthorized: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);

        if (await User.findOne({ email: decoded.email })) {
            return res
                .status(200)
                .json({ message: "Authorized", isAuthorized: true });
        }

        return res
            .status(401)
            .json({ message: "Unauthorized", isAuthorized: false });
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Internal server error", isAuthorized: false });
    }
}

export default loginStatusController;
