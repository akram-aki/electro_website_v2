import AnimateScroll from "./AnimateScroll";
export default function Who() {
  return (
    <div className="bg-BG2 my-12 px-20 pt-10 pb-20  flex justify-center items-center border border-gray-500 rounded-[17px]">
      <div className="grid grid-cols-[1fr_2fr]">
        <div className="grid gap-6 ">
          <AnimateScroll>
            <h1 className="text-white font-bold text-5xl mb-6">Who are we?</h1>{" "}
          </AnimateScroll>
          <AnimateScroll>
            <img
              src="https://cfi.iitm.ac.in/elec-club/images/st/1.jpg"
              alt="who image"
              className="aspect-square size-80 rounded-xl  object-cover"
            />
          </AnimateScroll>
        </div>
        <div className="flex flex-col relative gap-10">
          <AnimateScroll>
            <p className="text-justify text-BODY font-medium mt-16 mx-12 text-xl">
              Electro Club is a dynamic space for tech-savy students at U.M.B.B
              Founded in 2011, the club invites ambitious students to explore
              and innovate in electronics and robotics. The club's doors swing
              wide open for those eager to dive deeper into wide open
              advancements of technology.
            </p>
            /
          </AnimateScroll>
          <button className="bg-ELECT w-36 ml-auto mr-12 font-medium text-sm text-BODY rounded-xl py-6 px-4 ">
            JOIN US
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
