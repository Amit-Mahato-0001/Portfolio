import { Dispatch, SetStateAction } from "react";
import resume from "../../assets/resume.pdf";

type ViewType = "home" | "about";

interface NavbarProps {
  setView: Dispatch<SetStateAction<ViewType>>;
}

const Navbar = ({ setView }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-y border-white/10 bg-black/10 backdrop-blur-lg">
      <div className="flex items-center justify-between px-4 py-6">
        <div
          className="text-sm font-medium tracking-wide cursor-pointer"
          onClick={() => setView("home")}
        >
          A.M
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setView("home")}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Work
          </button>

          <button
            onClick={() => setView("about")}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            About
          </button>

          <a
            href={resume}
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;