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
        description: "Conducted structured performance benchmarking using Autocannon to evaluate API throughput under artificial latency, rate limiting, Redis caching, and Node.js clustering scenarios, improving throughput from ~9 requests/sec (1-second I/O delay) to ~9,700 requests/sec via Redis caching and multi-core clustering, and demonstrating latency’s impact on scalability while validating caching effectiveness in masking slow I/O operations.",
        image: "/images/Scaling.png",
        href: "#",
    },
    {
        id: "experiment02",
        title: "Experiment 02",
        description: "Coming soon...",
        image: "/images/pic-1.jpg",
        href: "#",
    },
];
