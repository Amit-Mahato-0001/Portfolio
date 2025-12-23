const MainLayout = ({ children }) => {

    return(
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
            {children}
        </div>
    )
};

export default MainLayout;