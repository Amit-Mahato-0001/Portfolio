import image from "../../assets/Amit.jpeg"

const AboutSection = () => {

  return(
        <section className="flex items-center">
            <div className="mx-auto max-w-6xl p-4 flex flex-col items-center gap-10 ">

                <img src={image} className="object-cover cover-left h-full w-full grayscale" />

                <p className="mb-4 text-sm text-[var(--color-muted)]">
                    Namaste, I’m Amit Kr. Mahato, a Full-Stack Developer from Ranchi. I build scalable web applications with clean architecture, efficient APIs, and responsive user interfaces. I enjoy working across the stack — from backend logic and databases to polished frontends — ensuring performance, reliability, and great user experience. I’m also curious about how AI and modern technologies shape the future of digital products.
                </p>

            </div>

        </section>
        
    )
};

export default AboutSection;