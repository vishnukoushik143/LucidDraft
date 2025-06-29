async function logoutController(req, res) {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logout successful" });
        console.log("User logged out successfully");
    } catch (error) {
        console.error("Logout failed:", error);
        res.status(500).json({ message: "Logout failed" });
    }
}

export default logoutController;
