import Entry from "../../models/Entry.js";

async function deleteEntryController(req, res) {
    const id = req.params._id;

    console.log("Deleting entry with ID:", id);

    try {
        const deletedEntry = await Entry.findByIdAndDelete(id);

        if (!deletedEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
    } catch (error) {
        console.error("Error deleting entry:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default deleteEntryController;
