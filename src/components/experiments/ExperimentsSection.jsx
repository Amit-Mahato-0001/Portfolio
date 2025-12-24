import ExperimentCard from "./experimentCard";;
import { EXPERIMENTS } from "./experiments.data";

const ExperimentsSection = () => {
    return(
        <section className="py-24">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
                    Experiments
                </h2>

                <div className="space-y-20">
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