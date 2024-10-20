import AnimateScroll from "./AnimateScroll";

export default function Description() {
  return (
    <div className="bg-NAV my-10 mx-24 py-24 flex flex-col justify-center items-center gap-12">
      <AnimateScroll>
        <p className="text-5xl text-white font-semibold text-center mx-auto max-w-5xl">
          <span className="text-ELECT">Electro Scientific Club:</span> a
          community of tech enthusiasts and future leaders.
        </p>
      </AnimateScroll>
      <AnimateScroll>
        <p className="text-gray-100 pb-5 font-medium text-2xl text-center mx-auto max-w-3xl">
          where your ideas matter: a place to unleash your creativity and
          curiosity in technology with skilled, friendly, and passionate
          members.
        </p>
      </AnimateScroll>
      <AnimateScroll>
        <div className="flex justify-center">
          <button className="bg-ELECT font-medium text-sm text-white rounded-xl px-4 py-3">
            WHO ARE WE?
          </button>
        </div>
      </AnimateScroll>
    </div>
  );
}
