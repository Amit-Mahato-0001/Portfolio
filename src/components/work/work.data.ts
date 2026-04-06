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
        description: "A multi-tenant SaaS platform for managing projects, teams, and operations with secure tenant isolation, RBAC, and JWT authentication, using React, Node.js, MongoDB, and Redis.",
        image: "/images/manageInSync.png",
        href: "https://github.com/Amit-Mahato-0001/ManageInSync",
    },
    {
        id: "work02",
        title: "Pixelva",
        description: "A Chrome extension for capturing, extracting, editing, and exporting web content directly from the browser using React, Tailwind, and Manifest v3, with support for screenshots, media assets, and multi-format export.",
        image: "/images/Pixelva.png",
        href: "https://microsoftedge.microsoft.com/addons/detail/ofhbnipkjmikfpfiggnllhfgadlpobnf",
    },
];
