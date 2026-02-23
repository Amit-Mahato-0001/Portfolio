import NavItem from "./NavItem"

const Navbar = () => {

    return(
        <nav className="w-full">
            <div className="mx-auto flex max-w-6xl itmes-center justify-between px-4 py-6">
                {/* Left */}
                <div className="text-sm font-medium tracking-wide">
                    A.M
                </div>

                {/* Right */}
                <div className="flex items-center gap-6">
                    <NavItem label="Work" href="#work"/>
                    <NavItem label="About" href="#about"/>
                    <NavItem label="Resume" href="/resume.pdf"/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
