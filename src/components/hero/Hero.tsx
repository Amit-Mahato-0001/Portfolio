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

// duplicate for seamless loop
const duplicatedStack = [...techStack, ...techStack]

const Hero = () => {
  const [isHover, setIsHover] = useState(false)

  // preload gif
  useEffect(() => {


    const gif = new Image()
    gif.src = "/images/welcome.gif"

  }, [])

  return (
    <section className="flex min-h-[50dvh] items-center px-4">

      <div className="w-full max-w-6xl overflow-hidden">
        
        <img
          src={isHover ? "/images/welcome.gif" : "/images/Amit.jpeg"}
          alt="Amit Kumar Mahato"
          className="mb-6 h-20 w-20 rounded-full object-cover"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        />

        <h1 className="text-2xl md:text-3xl">
          Namaste, I'm Amit Kr. Mahato.
        </h1>

        <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          I build scalable full-stack applications with a strong focus on clean architecture,
          modern frontend systems, secure backend workflows, and performance-driven user experiences.
        </p>

        <div className="mt-10 w-full overflow-hidden py-4">

          <div className="flex w-max animate-marquee gap-12">

            {duplicatedStack.map((tech, index) => (

              <div
                key={`${tech.name}-${index}`}
                className="flex items-center justify-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                />
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero