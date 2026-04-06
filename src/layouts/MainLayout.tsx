import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-3xl min-h-dvh ">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
