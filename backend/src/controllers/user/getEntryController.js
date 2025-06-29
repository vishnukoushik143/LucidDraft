import Entry from "../../models/Entry.js";

async function getEntryController(req, res) {
    const id = req.params._id;

    console.log("Fetching entry with ID:", id);

    try {
        const entry = await Entry.findOne({ _id: id });
        if (!entry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json(entry);
    } catch (error) {
        console.error("Error fetching entry:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default getEntryController;
