import resume from "../../assets/resume.pdf";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between px-4 py-6">
        <div className="text-lg font-medium tracking-wide cursor-pointer">A.M.</div>

        <div className="flex items-center gap-6">
          <button className="text-lg text-gray-400 hover:text-white transition">Work</button>

          <a href={resume} className="text-lg text-gray-400 hover:text-white transition">Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
