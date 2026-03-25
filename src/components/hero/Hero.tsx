const Hero = () => {

    return(

        <section className="relative flex min-h-[50dvh] items-center px-4">

            <div className="absolute inset-0">
                <img src="/images/train.webp"
                className="h-full w-full object-cover object-center"/>
            </div>


            <div className="mx-auto max-w-6xl relative z-10">
                <p className="text-sm">
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