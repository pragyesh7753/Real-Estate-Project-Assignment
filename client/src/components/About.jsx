const About = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-white relative overflow-hidden" id="overview">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content - Circular Images */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px]">
                        <div className="absolute top-0 left-10 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                            <img
                                src={data.content?.images?.[0] || "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt="Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute top-32 left-48 w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                            <img
                                src={data.content?.images?.[1] || "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt="Exterior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-30">
                            <img
                                src={data.content?.images?.[2] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                                alt="Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content - Text */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-8">
                            {data.title || "About Project"}
                        </h2>

                        <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
                            <p>
                                At Vignaharta Enclave, every detail reflects the grandest gesture of life in the most authentic and desirable home. Guided by a humanist approach, the architecture places people at the heart of the space. Built on the foundations of comfort, it evokes a true sense of freedom, protection, and belonging.
                            </p>
                            <p>
                                "The moment I entered the house, it felt welcomed" — this feeling defines the privilege Vignaharta Enclave offers. Thoughtfully designed with crafted amenities and timeless choices, the space resonates with the warmth and authenticity that you and your family truly deserve. It's the place your soul has long been searching for.
                            </p>
                        </div>

                        <button className="mt-8 bg-primary text-secondary px-8 py-3 rounded shadow-lg hover:bg-primary-dark hover:text-white transition-colors duration-300 font-serif font-bold tracking-wide">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
