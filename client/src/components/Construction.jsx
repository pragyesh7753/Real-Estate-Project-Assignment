const Construction = ({ data }) => {
    if (!data) return null;

    // Hardcoded construction updates for visual match since backend only provides one text block
    const updates = [
        {
            stage: "Under Construction",
            tower: "Tower A",
            status: "Know More",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            stage: "Completed",
            tower: "Tower B",
            status: "Know More",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            stage: "Completed",
            tower: "Tower C",
            status: "Know More",
            image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <section className="py-20 bg-accent/10" id="construction">
            <div className="container mx-auto px-6">
                <h2 className="section-title mb-4">Construction Updates</h2>
                <div className="h-1 w-24 bg-primary mx-auto mb-12"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {updates.map((item, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                            <img
                                src={item.image}
                                alt={item.tower}
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent flex flex-col justify-end items-center p-6 text-center">
                                <h3 className="text-white text-xl font-bold mb-1">{item.stage}</h3>
                                <p className="text-white/80 font-serif mb-2">{item.tower}</p>
                                <button className="text-white text-xs border border-white/40 rounded-full px-4 py-1 hover:bg-white hover:text-secondary transition-colors uppercase tracking-wider">
                                    {item.status}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Construction;
