import { NavLink, useNavigate } from "react-router";
import { useUser } from "../context/UserContext";

import api from "../api.js";

function SettingsPage() {
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    console.log("Logging out");

    api
      .post("/auth/logout")
      .then((response) => {
        localStorage.removeItem("username");
        setUsername("");

        console.log("Logout successful:", response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <section className="mx-auto flex h-full min-h-0 w-full flex-col items-center overflow-y-auto md:order-2 md:w-[80%]">
      <h1 className="my-6 font-medium">Settings</h1>
      <div className="flex h-fit w-full max-w-[600px] flex-col items-center">
        <div onClick={handleLogOut} className="text-red-600">
          logout
        </div>
      </div>
    </section>
  );
}

export default SettingsPage;
