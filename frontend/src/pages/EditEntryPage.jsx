import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import api from "../api.js";

function EditEntryPage(props) {
  const { _id } = useParams();
  const [title, setTitle] = useState(props.entry.title);
  const [content, setContent] = useState(props.entry.content);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    if (e.target.id == "title") {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }

    console.log(title);
    console.log(content);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      //make a toast notification
      return;
    }

    api
      .post(`user/update-entry/${_id}`, {
        title,
        content,
      })
      .then((response) => {
        console.log("Entry added successfully:", response.data);
        setContent("");
        setTitle("");
        navigate("/my-entries");
      })
      .catch((error) => {
        console.log("Error adding entry");
      });
  };

  return (
    <main className="mx-auto flex h-full min-h-0 w-full flex-col md:order-2 md:w-[80%]">
      <h2 className="my-4 text-center text-xl font-medium">Edit Entry</h2>
      <form onSubmit={handleOnSubmit} className="flex flex-col">
        <p className="font-medium">Edit Title of your Dream:</p>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          className="my-4 h-10 border-2 border-gray-300 p-2"
          onChange={handleOnChange}
        />

        <p className="font-medium">Edit Your Dream: </p>
        <textarea
          type="text"
          name="content"
          id="content"
          value={content}
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
              setContent(""), setTitle("");
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

export default EditEntryPage;
