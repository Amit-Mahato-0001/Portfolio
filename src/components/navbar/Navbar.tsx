import resume from "../../assets/resume.pdf"

const Navbar = () => {

  return (

    <nav>

      <div className="flex items-center justify-between px-4 py-6">

        <div className="text-lg font-medium tracking-wide cursor-pointer">A.M.</div>

        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-[#18181B] to-orange-500 px-2 py-1">

          <a href={resume} className="text-lg">Resume</a>

        </div>

      </div>

    </nav>

  )

}

export default Navbar