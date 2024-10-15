export default function Header() {
  return (
    <nav className="grid grid-cols-[1fr_2fr] pl-10 mt-4 items-center">
      <a href="">
        <span className="text-3xl">Electro club</span>
      </a>
      <div className="flex  justify-around">
        <a href="">ABOUT US</a>
        <a href="">ACTIVITIES</a>
        <a href="">DISCORD</a>
        <a href="">CONTACT</a>
      </div>
    </nav>
  );
}
