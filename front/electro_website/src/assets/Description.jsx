import AnimateScroll from "./AnimateScroll";

export default function Description() {
  return (
    <div className="bg-NAV  my-24 lg:px-0 sm:px-10 py-24 flex flex-col justify-center items-center sm:gap-6 lg:gap-12">
      <AnimateScroll>
        <p className="lg:text-5xl sm:text-3xl text-white font-semibold lg:text-center  sm:text-center mx-auto max-w-5xl">
          <span className="text-ELECT">
            Electro Scientific Club:
            <br className="lg:hidden" />
          </span>{" "}
          a community of tech enthusiasts and future leaders.
        </p>
      </AnimateScroll>
      <AnimateScroll>
        <p className="text-gray-100 pb-5 font-medium text-xl lg:text-center sm:text-justify mx-auto max-w-3xl">
          where your ideas matter: a place to unleash your creativity and
          curiosity in technology with skilled, friendly, and passionate
          members.
        </p>
      </AnimateScroll>
      <AnimateScroll>
        <div className="flex justify-center">
          <a
            href="#about-us"
            className="bg-ELECT font-medium text-sm text-white rounded-xl px-4 py-3"
          >
            WHO ARE WE?
          </a>
        </div>
      </AnimateScroll>
    </div>
  );
}
