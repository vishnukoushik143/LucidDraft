import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-amber-50">
      <Outlet />
    </main>
  );
}

export default AuthLayout;
