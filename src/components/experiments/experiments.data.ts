export interface Experiment {
    id: string;
    title: string;
    image: string;
    href: string;
    ambient: string;
}

export const EXPERIMENTS: Experiment[] = [
    {
        id: "experiment01",
        title: "Performance Optimization",
        image: "/images/Scaling.webp",
        href: "https://github.com/Amit-Mahato-0001/Scaling-API",
        ambient: "from-[#68BE2A]",
    },
];