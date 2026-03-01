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
        title: "ManageInSync",
        description: "A secure multi-tenant SaaS platform built for modern tech agencies, enabling seamless team and client management with strict tenant isolation, powerful role-based access control, and frictionless email invitation based onboarding.",
        image: "/images/manageInSync.png",
        href: "#",
    },
    {
        id: "work02",
        title: "Pixelva",
        description: "A Chrome extension built with Manifest v3 that captures active tab screenshots and offers a sleek in-browser editor for quick, customizable visual enhancements.",
        image: "/images/Pixelva.jpeg",
        href: "#",
    },
];
