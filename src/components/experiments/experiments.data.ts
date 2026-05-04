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
        title: "Performance Optimization",
        description: "Optimized backend performance by increasing throughput from ~9 to ~9,700+ req/sec using caching, clustering, and load testing, while reducing latency from ~1000ms to ~1ms and identifying key scalability bottlenecks in Redis-based systems.",
        image: "/images/Scaling.webp",
        href: "https://github.com/Amit-Mahato-0001/Scaling-API",
    },
];
