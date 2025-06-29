import { useState } from "react";
import { useNavigate } from "react-router";

import api from "../api.js";

function AddEntryPage() {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    if (e.target.id == "title") {
      setTitle(e.target.value);
    } else {
      setEntry(e.target.value);
    }

    console.log(title);
    console.log(entry);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || entry.trim() === "") {
      //make a toast notification
      return;
    }

    api
      .post("user/new-entry", { title, content: entry })
      .then((response) => {
        console.log("Entry added successfully:", response.data);
        setEntry("");
        setTitle("");
        navigate("/my-entries");
      })
      .catch((error) => {
        console.log("Error adding entry");
      });
  };

  return (
    <main className="mx-auto flex h-full min-h-0 w-full flex-col md:order-2 md:w-[80%]">
      <h2 className="my-4 text-center text-xl font-medium">New Entry</h2>
      <form onSubmit={handleOnSubmit} className="flex flex-col">
        <p className="font-medium">Set Title of your Dream:</p>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className="my-4 h-10 border-2 border-gray-300 p-2"
          onChange={handleOnChange}
        />

        <p className="font-medium">Describe Your Dream: </p>
        <textarea
          type="text"
          name="entry"
          id="entry"
          value={entry}
          onChange={handleOnChange}
          className="my-4 h-[20rem] overflow-y-auto border-2 border-gray-300 p-2"
        />

        <div className="mb-6 flex flex-row gap-4">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            onClick={() => {
              setEntry(""), setTitle("");
            }}
            className="rounded bg-red-700 px-4 py-2 text-white hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  );
}

export default AddEntryPage;
