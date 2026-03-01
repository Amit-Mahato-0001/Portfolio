import ExperimentCard from "./ExperimentCard";
import { EXPERIMENTS } from "./experiments.data";

const ExperimentsSection = () => {
    return(
        <section >
            <div className="mx-auto max-w-6xl">
                <h2 className="py-6 text-sm font-medium border-y border-white/10 px-4 uppercase tracking-widest text-[var(--color-muted)]">
                    Experiments
                </h2>

                <div className="space-y-12 px-4 py-6">
                    {EXPERIMENTS.map((experiment) => (
                        <ExperimentCard
                        key={experiment.id}
                        experiment={experiment}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ExperimentsSection;
