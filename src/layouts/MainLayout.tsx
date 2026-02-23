import { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode; //children prop koi v react renderable chiz ho skta he
}

const MainLayout = ({ children }: MainLayoutProps) => {

    return(
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
            {children}
        </div>
    )
};

export default MainLayout;
