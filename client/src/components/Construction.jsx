const Construction = ({ data }) => {
    if (!data) return null;

    // Use dynamic updates if available, fallback to hardcoded
    const updates = data.content?.updates || [
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

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {updates.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Content Side */}
                                <div className="w-full md:w-5/12">
                                    <div className="group relative rounded-2xl overflow-hidden shadow-lg h-[300px] border-4 border-white">
                                        <img
                                            src={item.image}
                                            alt={item.tower}
                                            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                            <h3 className="text-white text-xl font-bold mb-1">{item.stage}</h3>
                                            <p className="text-white/80 font-serif">{item.tower}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md hidden md:block"></div>

                                {/* Info Side (Empty for visual balance or can hold date/details) */}
                                <div className="hidden md:block w-5/12 px-6">
                                    <div className={`text-center md:text-left ${index % 2 !== 0 && 'md:text-right'}`}>
                                        <span className="inline-block px-4 py-1 rounded-full bg-white text-secondary text-sm font-semibold shadow-sm mb-2 border border-gray-100">
                                            Status Update
                                        </span>
                                        <p className="text-gray-500 text-sm">
                                            Click below to view full details about the current status of {item.tower}.
                                        </p>
                                        <button className="mt-4 text-primary font-semibold text-sm inline-flex items-center gap-1 group">
                                            {item.status} <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Construction;
