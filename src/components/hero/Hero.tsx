import ColorBends from "../ColorBends";

const Hero = () => {

    return(
        <section className="relative flex min-h-[50vh] items-center">

            <div className="absolute inset-0">
                <ColorBends
                colors={["#ff0000", "#ff7a00", "#ffd500", "#0066ff"]}
                rotation={120}
                speed={0.2}
                scale={3.5}
                frequency={1}
                warpStrength={1}
                mouseInfluence={1}
                parallax={0.5}
                noise={0.1}
                transparent
                autoRotate={0}
            />
            </div>


            <div className="mx-auto max-w-6xl px-4 relative z-10">
                <p className="mb-4 text-sm text-[var(--color-muted)]">
                    Namaste, I'm Amit Kr. Mahato.
                </p>

                <h1 className="max-w-2xl text-2xl font-medium leading-relaxed md:text-3xl">
                    Full-Stack Developer from Ranchi, Jharkhand.
                </h1>
            </div>
        </section>
    )
};

export default Hero;