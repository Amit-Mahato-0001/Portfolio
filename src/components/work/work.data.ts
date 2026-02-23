export interface WorkProject {
    id: string;
    title: string;
    description: string;
    image: string;
    href: string;
}

export const WORK_PROJECTS: WorkProject[] = [
    {
        id: "work01",
        title: "Work 01",
        description: "Coming soon...",
        image: "/images/pic-1.jpg",
        href: "#",
    },
    {
        id: "work02",
        title: "Work 02",
        description: "Coming soon...",
        image: "/images/pic-1.jpg",
        href: "#",
    },
];
