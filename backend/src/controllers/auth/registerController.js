import bcrypt from "bcrypt";

import { SALT_ROUNDS } from "../../costants.js";
import User from "../../models/User.js";

async function registerController(req, res) {
    const { name, email, password } = req.body;

    try {
        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (await User.findOne({ name })) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, Number(SALT_ROUNDS));

        await User.create({
            name,
            email,
            password: hashedPassword,
        }).catch((err) => {
            return res.status(500).json({ message: "Error creating user" });
        });

        return res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default registerController;
