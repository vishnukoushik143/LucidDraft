import {
  createBrowserRouter,
  Route,
  Outlet,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";

import ProtectedRoute from "./components/ProtectedRoute";

import EditEntryPage from "./pages/EditEntryPage";
import AddEntryPage from "./pages/AddEntryPage";
import EntryPage from "./pages/EntryPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route path="/" element={<WelcomePage />}></Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/my-entries" element={<HomePage />} />
          <Route path="/entry/:_id" element={<EntryPage />} />
          <Route path="/edit-entry/:_id" element={<EditEntryPage />} />
          <Route path="/new-entry" element={<AddEntryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
