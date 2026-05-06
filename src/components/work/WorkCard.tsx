import { WorkProject } from "./work.data"

interface WorkCardProps {
  project: WorkProject
}

const WorkCard = ({ project }: WorkCardProps) => {
  const { title, image, href } = project

  return (
    <a href={href} className="group block w-full">

      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 p-2 sm:p-3 md:p-4">

        {/* Top Red Ambient Gradient */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 z-0">
          <div className="absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-white to-transparent blur-2xl" />
        </div>

        {/* Mac top bar */}
        <div className="relative z-10 flex items-center gap-1.5 px-2 pt-1 pb-2">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>

        {/* Image wrapper */}
        <div className="relative z-10 overflow-hidden rounded-xl">

          {/* Image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-[80%]"
          />

          {/* Bottom Gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/80 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-5">

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm w-fit">

              <span className="h-2 w-2 rounded-full bg-[var(--color-muted)] transition-all duration-300 group-hover:scale-140"/>

              <h3 className="text-base font-medium leading-tight text-[var(--color-muted)] sm:text-lg md:text-lg">
                {title}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </a>
  )
}

export default WorkCard