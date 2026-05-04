import { WorkProject } from "./work.data"

interface WorkCardProps {
  project: WorkProject
}

const WorkCard = ({ project }: WorkCardProps) => {
  const { title, description, image, href } = project

  return (

    <a href={href} className="group block">

      {/* card Container */}
      <div className="relative rounded-2xl border border-white/10 p-2">
        
        {/* mac top bar */}
        <div className="flex items-center gap-1.5 px-2 pt-1 pb-2">

          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />

        </div>

        {/* image */}

        <div className="relative overflow-hidden rounded-xl">

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* gradient overlay*/}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#0b0b0b] to-transparent" />

          {/* content */}
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-white text-xl leading-tight">
              {title}
            </h3>

            {description && (
              <p className="mt-1 text-sm text-white/70 max-w-md">
                {description}
              </p>
            )}
          </div>

        </div>
        
      </div>

    </a>
  )
}

export default WorkCard