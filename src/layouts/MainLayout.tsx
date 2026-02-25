import { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode; //children prop koi v react renderable chiz ho skta he
}

const MainLayout = ({ children }: MainLayoutProps) => {

    return(
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] flex justify-center">
            <div className="mx-auto max-w-[45vw] border-x border-neutral-800">
                <div className="border-y border-neutral-800">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default MainLayout;
