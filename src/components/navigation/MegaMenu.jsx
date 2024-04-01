export default function MegaMenu() {
  return (
    <div className="fixed inset-x-0 border bg-white border-gray-200 md:mt-6 z-50 w-3/5 ml-7 md:w-full md:ml-0 h-screen flex flex-col md:flex-row">
      <div className="border border-gray-200 bg-gray-50 w-full md:w-1/4 flex justify-center items-center">
        <div className="w-3/4 h-36 flex flex-col items-center justify-center">
          <p
            className="text-blue-950 font-bold leading-none"
            style={{ fontSize: "3vw" }}
          >
            Choose Labverse Now!
          </p>
          <p className="text-gray-500 mt-5" style={{ fontSize: "1vw" }}>
            I'm a Student writing down this comment for my website
          </p>
        </div>
      </div>
      <div className="w-full h-full px-10 shadow-lg border border-gray-200">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8 border border-gray-200 max-w-none">
          {/* Content */}
        </div>
      </div>
    </div>
  );
}
