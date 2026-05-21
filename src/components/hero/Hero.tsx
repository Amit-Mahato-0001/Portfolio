import { useEffect, useState } from "react";

const techStack = [
  { name: "React", icon: "/icons/React.svg" },
  { name: "Tailwind", icon: "/icons/Tailwind.svg" },
  { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "Node.js", icon: "/icons/Node.js.svg" },
  { name: "GitHub", icon: "/icons/GitHub.svg" },
  { name: "Postman", icon: "/icons/Postman.svg" },
  { name: "Docker", icon: "/icons/Docker.svg" },
  { name: "TypeScript", icon: "/icons/TypeScript.svg" },
  { name: "NGINX", icon: "/icons/NGINX.svg" },
  { name: "Redis", icon: "/icons/Redis.svg" },
];

const Hero = () => {
  const [isHover, setIsHover] = useState(false)

  // preload gif
  useEffect(() => {
    const gif = new Image()
    gif.src = "/images/welcome.gif"
  }, [])

  return (
    <section className="flex min-h-[40dvh] items-center px-4">
      <div className="w-full max-w-6xl overflow-hidden">
        
        <img
          src={isHover ? "/images/welcome.gif" : "/images/Amit.jpeg"}
          alt="Amit Kumar Mahato"
          className="mb-6 h-20 w-20 rounded-full object-cover transition-all duration-300"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />

        <h1 className="text-lg font-bold md:text-xl">
          Namaste, I'm Amit Kr. Mahato.
        </h1>

        <p className="mt-2 max-w-3xl text-lg leading-relaxed text-[var(--color-muted)]">
          I build scalable backend systems using{" "}
          <span className="font-bold text-white">Node.js</span>,{" "}
          <span className="font-bold text-white">Express.js</span>,{" "}
          <span className="font-bold text-white">MongoDB</span>,{" "}
          <span className="font-bold text-white">Redis</span>,{" "}
          <span className="font-bold text-white">Docker</span>,{" "}
          <span className="font-bold text-white">Docker Compose</span>,{" "}
          <span className="font-bold text-white">
            GitHub Actions CI/CD
          </span>,{" "}
          and <span className="font-bold text-white">NGINX</span>, while
          developing modern frontend applications with{" "}
          <span className="font-bold text-white">React</span>,{" "}
          <span className="font-bold text-white">Redux</span>, and{" "}
          <span className="font-bold text-white">Tailwind CSS</span>.
        </p>

        <div className="mt-10 w-full overflow-hidden py-4">
          <div className="animate-marquee flex w-max">
            
            {[0, 1].map((setIndex) => (
              <div
                key={setIndex}
                className="flex shrink-0 items-center gap-12 pr-12"
                aria-hidden={setIndex === 1}
              >
                {techStack.map((tech) => (
                  <div
                    key={`${tech.name}-${setIndex}`}
                    className="group flex items-center justify-center transition-transform duration-300 hover:scale-110"
                  >
                    <img
                      src={tech.icon}
                      alt={setIndex === 0 ? tech.name : ""}
                      className="h-8 w-8 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero