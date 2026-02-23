const Footer = () => {

    return(
        <footer className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    {/* Left */}
                    <p className="text-sm text-[var(--color-muted)]">
                        © {new Date().getFullYear()} Amit Kr. Mahato
                    </p>

                    {/* Right */}
                    <div className="flex items-center gap-6 text-sm">
                        <a href="amitmahatocky909@gmail.com"
                        className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition">
                            Email
                        </a>
                        <a 
                        href="https://github.com/Amit-Mahato-0001"
                        className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition">
                            Github
                        </a>
                        <a 
                        href="https://www.linkedin.com/in/amit-kumar-mahato-529b2531b"
                        className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
