export const AuthHeader = () => {
  return (
    <header className="bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] header">
      <div className="flex items-center justify-between px-4 mx-auto xsm:px-10 max-w-screen-2xl py-7 content">
        <div className="logo">
          <a href="/">
            <h1 className="text-2xl font-bold sm:text-4xl">
              Job<span className="text-[#535353]">Search</span>
            </h1>
          </a>
        </div>
        <div className="join_button">
          <a
            href="#"
            className="bg-[#1976D2] hover:bg-[#1660A5] ease-linear duration-200 text-white py-3 px-7 rounded"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};
