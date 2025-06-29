import Entry from "../../models/Entry.js";

async function getEntriesController(req, res) {
    try {
        const userId = req.user._id;
        const entries = await Entry.find({ owner: req.user._id });

        console.log("Fetched entries:", entries);
        res.status(200).json(entries);
    } catch (error) {
        console.error("Error fetching entries:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default getEntriesController;
