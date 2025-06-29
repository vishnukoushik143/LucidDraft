import { NavLink } from "react-router";

import home_icon from "../assets/home_icon.svg";
import add_contact_icon from "../assets/add_contact_icon.svg";
import settings_icon from "../assets/settings_icon.svg";

function MainNavBar() {
  return (
    <nav className="main-navbar fixed bottom-0 z-100 flex w-full flex-row items-center justify-evenly bg-amber-50 px-2 opacity-100 md:sticky md:top-0 md:order-1 md:justify-normal">
      <NavLink
        to={"/my-entries"}
        end
        className="mr-auto hidden p-4 font-extrabold md:block"
      >
        LucidDraft
      </NavLink>
      <div className="flex w-full justify-evenly md:w-fit">
        <NavLink to="/my-entries" className="p-4 hover:bg-amber-100">
          <img src={home_icon} className="md:hidden" />
          <div className="hidden md:block">My Entries</div>
        </NavLink>
        <NavLink to="/settings" className="p-4 hover:bg-amber-100">
          <img src={settings_icon} className="md:hidden" />
          <div className="hidden md:block">Settings</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default MainNavBar;
