import elect_logo from "./elect_logo.png";
export default function Header() {
  return (
    <nav className="grid bg-NAV text-white   grid-cols-[1fr_3fr] pl-10 py-4 items-center">
      <a href="" className="flex items-center gap-2">
        <img src={elect_logo} className="size-10" alt="logo" />
        <span className="text-3xl font-bold">Electro club</span>
      </a>
      <div className="flex font-semibold justify-around">
        <a href="" className="hover:text-ELECT">
          ABOUT US
        </a>
        <a href="" className="hover:text-ELECT">
          ACTIVITIES
        </a>
        <a href="" className="hover:text-ELECT">
          DISCORD
        </a>
        <a href="" className="hover:text-ELECT">
          CONTACT
        </a>
      </div>
    </nav>
  );
}
