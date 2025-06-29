import { useState } from "react";
import { replace, useNavigate } from "react-router";
import api from "../../../../blog_app/frontend/src/api.js";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    console.log("Sending Register Request \n");
    console.log(formData);
    api
      .post("/auth/register", formData)
      .then((res) => {
        console.log(res.data.message);
        navigate("/login", replace);
      })
      .catch((err) => {
        console.log("Couldn't register user");
      });
  };

  return (
    <div className="z-10 flex w-full flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-xl shadow-gray-400 sm:w-[300px]">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-8">
        <label htmlFor="name">
          <p>Username:</p>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleOnChange}
            autoComplete="username"
            required
            className="h-8 w-full border-2 border-black p-1"
          />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
            autoComplete="email"
            required
            className="h-8 w-full border-2 border-black p-1"
          />
        </label>
        <label htmlFor="password">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
            autoComplete="current-password"
            required
            className="h-8 w-full border-2 border-black p-1"
          />
        </label>

        <button
          type="submit"
          className="mt-10 bg-blue-600 p-2 text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
