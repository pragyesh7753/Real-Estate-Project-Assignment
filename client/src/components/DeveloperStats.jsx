const DeveloperStats = ({ data }) => {
    if (!data || !data.content || !data.content.stats) return null;

    const stats = data.content.stats;

    return (
        <section className="bg-white py-20" id="developer">
            <div className="container mx-auto px-6">
                <h2 className="section-title mb-6">About Developer</h2>
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <p className="text-gray-600 leading-relaxed">
                        Vignaharta Developers is more than just a real estate company — we are dream weavers, committed to building not just homes, but better lives. With a legacy of expert craftsmanship and a forward-thinking approach, we're transforming skylines and setting new standards in urban living. Our foundation rests on integrity, excellence, and innovation, ensuring every project is a perfect blend of creativity, functionality, and sustainability.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="bg-primary/20 rounded-2xl p-8 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center divide-x divide-primary/20">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl lg:text-4xl font-serif font-bold text-secondary mb-2">{stat.value}</span>
                                <span className="text-xs uppercase tracking-wider text-gray-700 font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>




            </div>
        </section>
    );
};

export default DeveloperStats;
