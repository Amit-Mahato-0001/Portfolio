import WorkCard from "./WorkCard";
import { WORK_PROJECTS } from "./work.data";

const WorkSection = () => {

    return(
        <section id="work" >
            <div className="mx-auto max-w-6xl">
                
                <h2 className="py-6 text-sm font-medium border-y border-white/10 px-4 uppercase tracking-widest text-[var(--color-muted)] ">
                    Work
                </h2>

                <div className="space-y-12 px-4 py-6">
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
