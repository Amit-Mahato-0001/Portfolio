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
        description: "A multi-tenant SaaS platform enabling tech agencies to manage teams, clients, and projects with strict tenant-level isolation via MongoDB query scoping and custom middleware, granular RBAC (owner, admin, member, client) secured through JWT authentication, bcrypt hashing, and middleware authorization, invite-only email onboarding with expiring token-based activation links plus Google and GitHub OAuth integration, and front-end route guarding with role-based UI restrictions to prevent unauthorized cross-tenant access.",
        image: "/images/manageInSync.png",
        href: "#",
    },
    {
        id: "work02",
        title: "Pixelva",
        description: "A Chrome extension built using Manifest v3 that captures active tab screenshots and provides a React and Tailwind-based in-browser editor, implementing background service workers, secure message passing, and canvas-based image rendering for gradient overlays and dynamic resizing, with an extensible architecture supporting text, shapes, and multi-platform aspect ratio exports.",
        image: "/images/Pixelva.png",
        href: "#",
    },
];
