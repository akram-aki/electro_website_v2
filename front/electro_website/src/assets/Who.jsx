export default function Who() {
  return (
    <div className="bg-NAV relative m-10 pb-52 pt-5 px-20">
      <div className="grid grid-cols-[1fr_2fr]">
        <div className="grid gap-6 ">
          <h1 className="text-white font-bold text-3xl   ">Who are we?</h1>{" "}
          <img
            src="https://cfi.iitm.ac.in/elec-club/images/st/1.jpg"
            alt="who image"
            className="aspect-square size-80 rounded-xl  object-cover"
          />
        </div>

        <div className="grid relative">
          <p className="text-justify text-white font-medium mt-16 mx-12 text-xl">
            Electro Club is a dynamic space for tech-savy students at U.M.B.B
            Founded in 2011, the club invites ambitious students to explore and
            innovate in electronics and robotics. The club's doors swing wide
            open for those eager to dive deeper into wide open advancements of
            technology.
          </p>
          <a href="" className="right-0">
            Learn more
          </a>
          <button className="bg-ELECT  font-medium text-sm text-white rounded-xl px-4 py-3">
            JOIN US
          </button>
        </div>
      </div>
    </div>
  );
}
