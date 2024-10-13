export const Footer = () => {
  return (
    <footer className="bg-[#1976D2]">
      <div className="flex flex-col px-10 py-6 mx-auto max-lg:gap-5 lg:items-center lg:justify-between lg:flex-row content max-w-screen-2xl">
        <div className="icon">
          <h2 className="text-xl font-bold text-white">
            <span className="text-black">Job</span>Search
          </h2>
        </div>
        <ul className="flex flex-col gap-6 font-medium text-white lg:flex-row lg:items-center lg:gap-3 xl:gap-6 ">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">User Agreement</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
          <li>
            <a href="#">Copyright Policy</a>
          </li>
          <li>
            <a href="#">Brand Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
