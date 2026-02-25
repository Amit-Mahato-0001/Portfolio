const AboutSection = () => {

  return(
        <section className="flex min-h-[60vh] items-center border-y border-neutral-800">
            <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-10 ">

                <img src="/public/images/Amit.jpg" className="rounded-full object-cover cover-left h-50 w-50 grayscale" />

                <p className="mb-4 text-sm text-[var(--color-muted)]">
                    Namaste, I’m Amit Kr. Mahato, a Full-Stack Developer from Ranchi. I build scalable web applications with clean architecture, efficient APIs, and responsive user interfaces. I enjoy working across the stack — from backend logic and databases to polished frontends — ensuring performance, reliability, and great user experience. I’m also curious about how AI and modern technologies shape the future of digital products.
                </p>

            </div>
        </section>
    )
};

export default AboutSection;