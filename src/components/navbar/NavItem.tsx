interface NavItemProps {
    label: string;
    href: string;
}

const NavItem = ({ label, href }: NavItemProps) => {

    return(
        <a
        href={href}
        className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
        >
            {label}
        </a>
    )
};

export default NavItem;
