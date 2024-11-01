import { useContext, useState } from "react";
import axios from "axios";
import { userContext } from "../../User";
export default function ProjectForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const { id } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description || !img || !id) return;
    axios
      .post("http://localhost:8000/addproject", {
        title,
        description,
        img,
        id,
      })
      .then(() => alert("success"))
      .catch(() => alert("failed, try again later"));
  }

  return (
    <>
      {id && (
        <form
          onSubmit={handleSubmit}
          className="grid gap-10 m-10 bg-NAV lg:p-24 sm:p-5 rounded-xl"
        >
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows={5}
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            {img && (
              <div>
                <img
                  src={img}
                  alt="img"
                  className="object-cover rounded-2xl aspect-square"
                ></img>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-ELECT w-24 rounded-xl h-10"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}
