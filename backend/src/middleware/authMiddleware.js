import jwt from "jsonwebtoken";
import User from "../models/User.js";

async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = {
            email: user.email,
            name: user.name,
            _id: user._id,
        };
        return next();
    } catch (err) {
        return res
            .status(500)
            .json({ message: "Internal server error", isAuthorized: false });
    }
}

export default authMiddleware;
