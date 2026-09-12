import type { Technology } from "../App";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-white/20">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 p-3">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="badge badge-outline border-white/20 text-xs text-gray-300">
          {technology.badge}
        </span>
      </div>

      {/* Name + Description */}
      <h3 className="mt-5 text-xl font-bold text-white">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-400">
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="badge border-0 bg-white/10 text-gray-300">
          {technology.category}
        </span>

        <span className="badge border-0 bg-white/10 text-gray-300">
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="text-yellow-400">★</span>
        <span className="font-medium text-white">
          {technology.rating}
        </span>
        <span className="text-gray-500">/ 5</span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`btn mt-5 w-full rounded-xl ${
          isAdded
            ? "btn-disabled"
            : "border-0 brand-gradient text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;