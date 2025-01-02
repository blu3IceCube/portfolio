import StarIcon from "@/public/icons/star.svg";

const words = [
  "Reliable",
  "User Friendly",
  "Secure",
  "Search Optimized",
  "Interactive",
  "Performant",
  "Usable",
  "Maintainable",
  "Scalable",
  "Accessible",
  "Responsive",
];

export const Tape = () => {
  return (
    <div className="py-16 lg:py-28 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div
                key={word}
                className="inline-flex gap-4 items-center text-gray-900"
              >
                <span className="uppercase font-extrabold text-sm">{word}</span>
                <StarIcon className="size-6 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
