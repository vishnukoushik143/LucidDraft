import { useNavigate } from "react-router";
import api from "../api.js";

import delete_icon from "../assets/delete_icon.svg";

function DisplayBox({ entry }) {
  console.log(entry);
  const navigate = useNavigate();
  const date = entry.date || new Date();

  const handleRefresh = () => navigate(0);

  const handleDelete = async (e) => {
    api
      .post(`/user/delete-entry/${entry._id}`)
      .then((res) => {
        console.log("Entry deleted successfully:", res.data);
      })
      .catch((error) => {
        console.error("Error deleting entry:", error);
      });
    navigate(0);
  };

  return (
    <div
      key={entry._id}
      className="my-2 cursor-pointer rounded-lg border-2 border-gray-300 p-2 shadow-md transition-colors duration-200 hover:bg-gray-50 md:p-4"
    >
      <div
        onClick={() => navigate(`/entry/${entry._id}`)}
        className="flex w-full flex-col justify-between p-2"
      >
        <h3 className="mb-2 h-fit font-medium">{entry.title}</h3>
        <p className="my-2 text-xs text-gray-500">{date.toString()}</p>
        <p className="h-[6rem] overflow-x-clip overflow-y-hidden text-gray-800 md:h-[3rem]">
          {entry.content}
        </p>
      </div>

      <div>
        <button
          onClick={handleDelete}
          className="rounded p-2 hover:bg-gray-300"
        >
          <img src={delete_icon} />
        </button>
      </div>
    </div>
  );
}

export default DisplayBox;
