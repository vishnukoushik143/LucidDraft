import { useNavigate } from "react-router";
import DisplayBox from "../components/DisplayBox";
function WelcomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-full flex-col items-center bg-amber-50">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-6 text-4xl">
          Welcome To <span className="font-extrabold">LucidDraft</span>
        </h1>
        <p className="text-gray-500">
          Feeling constant Deja Vu? Document your crazy dreams online...
        </p>
        <div className="mt-16 flex flex-row gap-8">
          <button
            className="mx-auto rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
            onClick={() => navigate("/login", { replace: true })}
          >
            Login
          </button>
          <button
            className="mx-auto rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-800"
            onClick={() => navigate("/register", { replace: true })}
          >
            Register
          </button>
        </div>
      </div>
    </main>
  );
}

export default WelcomePage;
