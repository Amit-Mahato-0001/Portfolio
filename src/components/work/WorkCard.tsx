import { WorkProject } from "./work.data"

interface WorkCardProps {
  project: WorkProject
}

const WorkCard = ({ project }: WorkCardProps) => {
  const { title, image, href, ambient } = project

  return (
    <a
      href={href}
      className="group block w-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Card */}
      <div
        className="
          relative overflow-hidden
          rounded-[18px]
          border border-white/10
          bg-white/[0.03]
          p-2 sm:p-2.5 md:p-3
          transition-all duration-300
        "
      >
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div
            className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${ambient} to-transparent blur-3xl`}
          />
        </div>

        {/* Image Wrapper */}
        <div className="relative z-10 overflow-hidden rounded-[14px]">

          {/* Image */}
          <img
            src={image}
            alt={title}
            className="
              w-full
              object-cover
              opacity-80
              transition-all duration-500
              group-hover:opacity-100
            "
          />

          {/* Bottom Overlay */}
          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-[75%]
              bg-gradient-to-t
              from-black
              via-black/70
              to-transparent
            "
          />

          {/* Content */}
          <div
            className="
              absolute bottom-0 left-0
              p-2.5 sm:p-3 md:p-4
            "
          >
            <div
              className="
                flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/10
                px-3 py-1.5
                backdrop-blur-md
              "
            >
              {/* Dot */}
              <span
                className="
                  h-2 w-2 rounded-full
                  bg-[var(--color-muted)]
                  transition-transform duration-300
                  group-hover:scale-125
                "
              />

              {/* Title */}
              <h3
                className="
                  text-sm sm:text-base
                  font-medium
                  text-[var(--color-muted)]
                  leading-none
                "
              >
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