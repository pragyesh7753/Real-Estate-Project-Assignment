const Amenities = ({ amenities }) => {
    if (!amenities || amenities.length === 0) return null;

    // Map amenities to icons/images (mock mapping for visual design)
    // Map amenities to icons/images
    const getIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('gym') || lowerTitle.includes('fitness')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 39v-3.875a3.375 3.375 0 016.75 0V39M12 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            );
        }
        if (lowerTitle.includes('pool')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
            );
        }
        if (lowerTitle.includes('garden') || lowerTitle.includes('park')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            );
        }
        if (lowerTitle.includes('play')) {
            return (
                <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            );
        }
        // Default
        return (
            <svg className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        );
    };

    return (
        <section className="py-20 bg-accent/20" id="amenities">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-left mb-2">Amenities</h2>
                <p className="text-gray-600 mb-12 max-w-2xl">
                    Thoughtfully crafted surroundings that reflect tradition, comfort, and a human-centered design approach.
                </p>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left - Featured Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Amenities Overview"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>

                    {/* Right - Grid */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {amenities.map((amenity) => (
                                <div key={amenity._id} className="flex flex-col items-center group cursor-pointer">
                                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center p-5 shadow-md mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 border border-green-100">
                                        {getIcon(amenity.title)}
                                    </div>
                                    <h4 className="text-center text-secondary font-medium group-hover:text-primary transition-colors">
                                        {amenity.title}
                                    </h4>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center lg:text-left">
                            <button className="bg-gradient-to-r from-primary to-green-400 text-white px-8 py-3 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold uppercase tracking-wide text-sm">
                                View more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amenities;
