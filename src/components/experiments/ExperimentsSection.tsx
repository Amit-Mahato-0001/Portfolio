import ExperimentCard from "./ExperimentCard";
import { EXPERIMENTS } from "./experiments.data";

const ExperimentsSection = () => {
    return(
        <section className="py-12">
            <div className="mx-auto max-w-6xl px-4 border-y border-neutral-800">
                <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]">
                    Experiments
                </h2>

                <div className="space-y-24">
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
