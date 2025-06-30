import Entry from "../../models/Entry.js";

async function updateEntryController(req, res) {
    try {
        const { _id } = req.params;
        const { title, content } = req.body;

        if (!title || !content) {
            return res
                .status(400)
                .json({ message: "Title and content are required." });
        }

        const entry = await Entry.findById(_id);
        if (!entry) {
            return res.status(404).json({ message: "Entry not found." });
        }

        entry.title = title;
        entry.content = content;
        await entry.save();

        res.status(200).json({ message: "Entry updated successfully." });
    } catch (error) {
        console.error("Error updating entry:", error);
        res.status(500).json({ message: "Internal server error." });
    }
}
export default updateEntryController;
