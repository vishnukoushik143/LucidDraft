import { useState, useEffect } from "react";

import api from "../api";
import { NavLink } from "react-router";
import DisplayBox from "../components/DisplayBox";

function HomePage() {
  const [entries, setEntries] = useState(null);

  const handleReload = () => window.location.reload();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const res = await api.get("/user/entries");
        setEntries([...res.data]);
        console.log(res);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  if (entries == null) return <div className="order-2">Loading.....</div>;

  return (
    <section className="relative z-0 mb-4 flex h-fit w-full flex-col px-2 md:order-2 md:mx-auto md:w-[80%]">
      <h2 className="text-center text-xl font-medium">Your Entries</h2>
      {entries.map((entry) => {
        return (
          <DisplayBox
            entry={entry}
            key={entry._id}
            handleReload={handleReload}
          />
        );
      })}
      <div className="h-16 w-full"></div>
      <NavLink
        to={"/new-entry"}
        className="fixed right-0 bottom-16 z-100 m-3 rounded-xl border-2 border-amber-600 bg-white opacity-100 shadow-gray-500 md:right-[10vw] md:bottom-1 md:rounded-full md:p-3 md:shadow-2xl"
      >
        <span className="z-100 hidden px-4 md:block">New Entry +</span>
        <span className="block rounded-xl px-3 py-1 text-4xl text-amber-600 md:hidden">
          +
        </span>
      </NavLink>
    </section>
  );
}

export default HomePage;
