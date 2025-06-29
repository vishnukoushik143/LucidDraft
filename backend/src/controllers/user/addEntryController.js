import Entry from "../../models/Entry.js";

async function addEntryController(req, res) {
    const entry = { ...req.body, owner: req.user._id };
    console.log(entry);

    try {
        const newEntry = await Entry.create(entry);
        res.status(201).json(newEntry);
    } catch (error) {
        console.error("Error adding entry:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default addEntryController;
