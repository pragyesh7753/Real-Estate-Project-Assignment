const Overview = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
                    {data.title}
                </h2>
                {data.subtitle && (
                    <h3 className="text-xl md:text-2xl text-center mb-8 text-gray-600">
                        {data.subtitle}
                    </h3>
                )}
                {data.description && (
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                            {data.description}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Overview;
