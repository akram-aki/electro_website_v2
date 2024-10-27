import React, { useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { MdEvent, MdComputer, MdEmail, MdDelete } from "react-icons/md";
import EventForm from "./EventForm";
import ProjectForm from "./ProjectForm";
import MailComponent from "./MailComponent";
import { motion } from "framer-motion";
import { userContext } from "../../User";
import { useContext } from "react";

export default function Dashboard() {
  const [selected, setSelected] = useState("Add new event");
  const { id } = useContext(userContext);

  return (
    <>
      {id && (
        <div className="flex bg-BG">
          <Sidebar selected={selected} setSelected={setSelected} />
          {selected === "Add new event" ? (
            <div className="w-screen">
              <EventForm />
            </div>
          ) : selected === "Add new project" ? (
            <div className="w-screen">
              <ProjectForm />
            </div>
          ) : selected === "Mail" ? (
            <MailComponent />
          ) : (
            <div className="text-6xl text-white">wtf</div>
          )}
        </div>
      )}
    </>
  );
}

const Sidebar = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.nav
      layout
      className="sticky top-0 h-lvh shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={MdEvent}
          title="Add new event"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={MdComputer}
          title="Add new project"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={MdDelete}
          title="Delete event"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={MdDelete}
          title="Delete Project"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={MdEmail}
          title="Mail"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-BG"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <a
        href="/"
        className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100"
      >
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold text-black">
                Dashboard
              </span>
              <span className="block text-xs text-slate-700">Electro </span>
            </motion.div>
          )}
        </div>
      </a>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-ELECT"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};