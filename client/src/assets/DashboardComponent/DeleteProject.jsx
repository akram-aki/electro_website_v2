import { useEffect, useState } from "react";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteProject() {
  const [searchedProject, setSearchedProject] = useState("");
  const [e, setE] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      axios
        .get("/searchProjects", {
          params: {
            search: searchedProject,
          },
        })
        .then((res) => {
          setE(res.data);
        });
    };
    fetchData();
  }, [searchedProject]);

  function handleDelete(title) {
    const del = confirm("are you sure you want to delete this project?");
    if (del) {
      axios
        .delete("/deleteProject", {
          data: {
            title: title,
          },
        })
        .then(() => alert("deletion successful"))
        .catch(() => alert("failed to delete project, try again later"));
    }
  }
  return (
    <div className="bg-NAV w-screen lg:m-24 sm:m-8 p-10">
      <div className="grid gap-4">
        <h1 className="text-3xl font-sora text-white ">Delete Project</h1>
        <input
          onChange={(e) => setSearchedProject(e.target.value)}
          className="w-full shadow-lg rounded-xl p-4"
        />
        <div
          className={`bg-BG rounded-lg w-full py-5 grid gap-3 ${
            e.length === 0 ? "hidden" : "non-empty-state-class"
          }`}
        >
          {e &&
            e.map((project) => (
              <div
                className="flex hover:bg-NAV gap-2  w-full p-2"
                key={project.title}
              >
                <RiDeleteBin6Line className="text-white text-2xl size-5 " />
                <button
                  className="text-start text-white"
                  onClick={() => {
                    handleDelete(project.title);
                  }}
                >
                  {project.title}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
