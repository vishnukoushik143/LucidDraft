import { useEffect, useState } from "react";
import { useParams } from "react-router";

import api from "../api.js";

function EntryPage() {
  const { _id } = useParams();

  console.log("EntryPage _id:", _id);

  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      api
        .get(`/user/entry/${_id}`)
        .then((res) => {
          setEntry(res.data);
        })
        .catch((error) => {
          console.error("Error fetching entry:", error);
        });
    };

    fetchEntry();
  }, []);

  if (entry == null) return <div>Loading...</div>;

  return (
    <main className="mx-auto h-full w-full md:order-2 md:w-[80%]">
      <h2 className="my-10 text-xl font-medium">{entry.title}</h2>
      <pre>{entry.content}</pre>
    </main>
  );
}

export default EntryPage;
