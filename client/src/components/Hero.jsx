const Hero = ({ data }) => {
    // Static data for pricing card since backend doesn't support it yet
    const location = "BLDG. NO. 223/224, CIRCLE : KANNAMWAR NAGAR I, VIKHROLI (EAST)";

    if (!data) return null;

    return (
        <section className="relative min-h-screen pt-20 flex items-center bg-gray-50 overflow-hidden" id="home">
            {/* Background geometric shape */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-accent rounded-l-[100px] -z-0 hidden lg:block"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Content - Image */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.01]">
                            <img
                                src={data.imageUrl || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                                alt="Luxury Building"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-white text-xl font-serif mb-2 tracking-wider animate-slide-up-fade" style={{ animationDelay: '0.1s' }}>THINKING OF A</h3>
                                <h2 className="text-white text-3xl font-bold mb-4 animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>FANTASTIC VICINITY?</h2>
                                <div className="flex gap-4 text-white/90 text-sm font-sans animate-slide-up-fade" style={{ animationDelay: '0.3s' }}>
                                    <span className="bg-white/20 px-3 py-1 rounded backdrop-blur-md border border-white/30">20+ PODIUM AMENITIES</span>
                                    <span className="bg-white/20 px-3 py-1 rounded backdrop-blur-md border border-white/30">SPACIOUS BALCONY HOMES</span>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-dots opacity-20 hidden md:block"></div>
                    </div>

                    {/* Right Content - Pricing Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-primary text-center">
                            <div className="mb-8">
                                <svg className="h-16 w-16 mx-auto mb-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z" />
                                </svg>
                                <h1 className="text-4xl md:text-5xl font-serif text-secondary mb-2">VIGNUHARTA</h1>
                                <h1 className="text-4xl md:text-5xl font-serif text-secondary tracking-[0.2em] font-light">INFINITY</h1>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 border-y border-gray-100 py-8">
                                {/* 1 BHK */}
                                <div className="text-center w-full">
                                    <h3 className="text-xl text-secondary font-bold mb-1">SMART 1 BHK</h3>
                                    <p className="text-gray-400 line-through text-sm">@ 74.99 Lacs</p>
                                    <p className="text-3xl font-bold text-secondary mt-1">₹ 69.99 Lacs*</p>
                                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">onwards</p>
                                </div>

                                {/* Divider */}
                                <div className="hidden md:block w-px h-24 bg-gray-200 relative">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 text-gray-400 rotate-45 border border-gray-200"></div>
                                </div>

                                {/* 2 BHK */}
                                <div className="text-center w-full">
                                    <h3 className="text-xl text-secondary font-bold mb-1">PREMIUM 2 BHK</h3>
                                    <p className="text-gray-400 line-through text-sm">@ 1.05 CR</p>
                                    <p className="text-3xl font-bold text-secondary mt-1">₹ 96.99 Lacs*</p>
                                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">onwards</p>
                                </div>
                            </div>

                            <div className="flex items-start justify-center gap-2 text-gray-600 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="max-w-xs text-left font-medium">{location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
