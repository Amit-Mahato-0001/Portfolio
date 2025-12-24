const WorkCard = ({ project }) => {
    const { title, description, image, href } = project;

    return(
        <a href={href}
        className="group block"
        >
            {/* Text */}
            <div className="mb-4">
                <h3 className="text-lg font-medium">
                    {title}
                </h3>
                {description && (
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {description}
                    </p>
                )}
            </div>

            {/* Image*/}
            <div className="overflow-hidden rounded-lg">
                <img 
                src={image}
                alt={title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
        </a>
    )
};

export default WorkCard;