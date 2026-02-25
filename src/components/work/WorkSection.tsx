import WorkCard from "./WorkCard";
import { WORK_PROJECTS } from "./work.data";

const WorkSection = () => {

    return(
        <section id="work" className="py-12">
            <div className="mx-auto max-w-6xl px-4 border-y border-neutral-800">
                {/* Section title */}
                <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-[var(--color-muted)] ">
                    Work
                </h2>

                {/* Work List */}
                <div className="space-y-24">
                    {WORK_PROJECTS.map((project) => (
                        <WorkCard
                        key={project.id}
                        project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default WorkSection;
