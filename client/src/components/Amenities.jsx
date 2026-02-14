const Amenities = ({ amenities }) => {
    if (!amenities || amenities.length === 0) return null;

    return (
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
                    Amenities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity) => (
                        <div
                            key={amenity._id}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                                {amenity.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {amenity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
