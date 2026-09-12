import type { Technology } from "../App";

type StackSidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  return (
    <aside className="h-fit rounded-2xl bg-white p-5 text-gray-900 lg:sticky lg:top-24">
      <h2 className="text-xl font-bold">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length} Technology {stack.length === 1 ? "Selected" : "Selected"}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-gray-200 px-4 py-10 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="btn btn-ghost btn-sm px-2 text-gray-400 hover:bg-transparent hover:text-gray-700"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="btn btn-outline mt-6 w-full rounded-xl border-red-300 text-red-500 hover:border-red-400 hover:bg-red-50 hover:text-red-600"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;