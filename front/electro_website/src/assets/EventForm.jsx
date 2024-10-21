import { useContext, useState } from "react";
import axios from "axios";
import { userContext } from "../User";
export default function EventForm() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const { id } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !subtitle || !description || !date || !img || !id) return;
    axios.post("http://localhost:8000/addevent", {
      title,
      subtitle,
      description,
      date,
      img,
      id,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-10 m-10 bg-NAV p-24 rounded-xl"
    >
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="subtitle"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <textarea
        rows={5}
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
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
  );
}
