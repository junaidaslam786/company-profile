export default function MegaMenu() {
    return (
      <div className="fixed inset-x-0 border bg-white border-gray-200 mt-6 z-50 h-1/2 flex flex-row">
        <div className="border border-gray-200 bg-gray-50 w-1/4 flex items-center justify-center">
          <div className="w-3/4">
            <p className="text-blue-950 text-7xl font-bold">
              Choose Labverse Now!
            </p>
            <p className="text-gray-500 text-3xl mt-5">
              I'm a Student writing down this comment for my website
            </p>
          </div>
        </div>
        <div className="w-full px-10 py-52 shadow-lg border border-gray-200">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border border-gray-200 max-w-none">
            {/* Content */}
          </div>
        </div>
      </div>
    );
  }
  