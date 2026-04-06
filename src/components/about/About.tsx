import image from "../../assets/Amit.jpeg"

import p1 from "/images/p1.jpeg"
import p2 from "/images/p2.jpeg"
import p3 from "/images/p3.jpeg"
import p4 from "/images/p4.jpeg"
import p5 from "/images/p5.webp"
import p6 from "/images/p6.jpeg"

import s1 from "/images/s1.jpeg"
import s2 from "/images/s2.jpg"
import s3 from "/images/s3.jpeg"
import s4 from "/images/s4.jpg"
import s5 from "/images/s5.jpeg"
import s6 from "/images/s6.jpeg"

const AboutSection = () => {
  return (
    <section className="flex items-center px-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 space-y-6">
        <img
          src={image}
          className="rounded-3xl mt-6"
        />

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl">
            Where I'm from.
          </h1>

          <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            I’m from Bokaro, Jharkhand, where I grew up in a simple hardworking
            family. My father works a small job in a steel plant factory, and my
            mother manages extra household work with quiet strength and dedication.
            Watching them work every day taught me the value of discipline,
            consistency, and staying grounded — values I now carry into the way I
            learn, build, and move forward in tech.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            <img
              src={p1}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={p2}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={p3}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={p4}
              className="h-48 w-full rounded-2xl object-cover object-left"
            />
            <img
              src={p5}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={p6}
              className="h-48 w-full rounded-2xl object-cover"
            />

          </div>

        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl">
            What I like to do.
          </h1>

          <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            The Gym: What started as a way to get fit turned into my daily dose of discipline. It’s where I go to clear my head and remind myself that hard work always pays off.
          </p>

          <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Motorsports: I’m a total car and bike enthusiast. I love learning about how machines work—there’s something about great design and high performance that really inspires me.
          </p>

          <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Content Creation: I’ve spent a lot of time building YouTube channels (growing them to over 3,000 combined subscribers). It taught me the "behind the scenes" of editing and what it takes to actually grow an audience.
          </p>

          <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
            Sports: My years playing football taught me how to be a teammate. I learned early on that you win by being consistent and looking out for the person next to you.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            <img
              src={s1}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={s2}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={s3}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={s4}
              className="h-48 w-full rounded-2xl object-cover object-left"
            />
            <img
              src={s5}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={s6}
              className="h-48 w-full rounded-2xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>

  )
}

export default AboutSection