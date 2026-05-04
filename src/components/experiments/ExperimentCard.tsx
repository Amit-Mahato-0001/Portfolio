import { Experiment } from "./experiments.data"

interface ExperimentCardProps {
  experiment: Experiment
}

const ExperimentCard = ({ experiment }: ExperimentCardProps) => {
  const { title, description, image, href } = experiment

  return (
    <a href={href} className="group block w-full">

      {/* Card container */}
      <div className="relative rounded-2xl border border-white/10 p-2 sm:p-3 md:p-4">

        {/* Mac top bar */}
        <div className="flex items-center gap-1.5 px-2 pt-1 pb-2">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>

        {/* Image section with fixed aspect ratio */}
        <div className="relative overflow-hidden rounded-xl">

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/80 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-5">
            <h3 className="text-white text-base sm:text-lg md:text-xl leading-tight">
              {title}
            </h3>

            {description && (
              <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-[90%] sm:max-w-md">
                {description}
              </p>
            )}
          </div>

        </div>

      </div>

    </a>
  )
}

export default ExperimentCard