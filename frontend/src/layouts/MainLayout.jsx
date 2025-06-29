import { Outlet } from "react-router";

import MainHeader from "../components/MainHeader";
import MainNavBar from "../components/MainNavBar";

function MainLayout() {
  return (
    <main className="relative mx-auto flex h-screen min-h-0 w-full flex-col">
      <MainHeader />
      <Outlet />
      <MainNavBar />
    </main>
  );
}

export default MainLayout;
