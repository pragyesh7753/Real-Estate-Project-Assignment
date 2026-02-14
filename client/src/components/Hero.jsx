const Hero = ({ data }) => {
    if (!data) return null;

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                    {data.title}
                </h1>
                {data.subtitle && (
                    <h2 className="text-2xl md:text-3xl mb-8 text-blue-200">
                        {data.subtitle}
                    </h2>
                )}
                {data.description && (
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Hero;
