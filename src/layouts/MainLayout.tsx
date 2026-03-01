import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)] border-x border-white/10">
      <div className="mx-auto max-w-4xl min-h-dvh ">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;