export interface WorkProject {
    id: string;
    title: string;
    image: string;
    href: string;
    ambient: string;
}

export const WORK_PROJECTS: WorkProject[] = [
    
    {
        id: "work01",
        title: "ManageInSync",
        image: "/images/ManageInSync.webp",
        href: "https://github.com/Amit-Mahato-0001/ManageInSync",
        ambient: "from-blue-500"
    },

    {
        id: "work02",
        title: "Pixelva",
        image: "/images/Pixelva.webp",
        href: "https://microsoftedge.microsoft.com/addons/detail/ofhbnipkjmikfpfiggnllhfgadlpobnf",
        ambient: "from-white",
    },
]