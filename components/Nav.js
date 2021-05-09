export default function Nav() {
  return (
    <>
      <div className="p-3 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2
            className="ml-2 text-2xl font-bold leading-7 \
        sm:text-3xl sm:truncate text-shadow text-yellow-400"
          >
            CropTracker
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          {/* <button
            type="button"
            className="inline-flex items-center px-6 py-3 border \
        rounded-full border-transparent text-base font-medium\
        rounded-md shadow-sm text-white focus:outline-none focus:ring-2\
        bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-700\
        focus:ring-offset-2 focus:ring-yellow-500"
          >
            <span
              style={{
                textShadow: "0px 1px 3px #111111",
              }}
            >
              Connect
            </span>
          </button> */}
        </div>
      </div>
    </>
  );
}
