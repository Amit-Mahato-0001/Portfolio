export interface Experiment {
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
}

export const EXPERIMENTS: Experiment[] = [
    {
        id: "experiment01",
        title: "Api Scaling",
        description: "Conducted performance benchmarking to optimize API throughput, improving request handling from 9 req/sec to 9,700+ req/sec through strategic caching and multi-core scaling.",
        image: "/images/Scaling.png",
        href: "#",
    },
];
