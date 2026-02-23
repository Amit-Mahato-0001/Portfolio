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
        title: "Experiment 01",
        description: "Coming soon...",
        image: "/images/pic-1.jpg",
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
