import { useState } from 'react';

const FloorPlans = ({ data }) => {
    const [activeTab, setActiveTab] = useState('1bhk');

    if (!data || !data.content || !data.content.plans) return null;

    const plans = data.content.plans;

    return (
        <section className="py-20 bg-accent/20" id="floor-plans">
            <div className="container mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">

                        {/* Left - Floor Plan Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-white p-4 border border-gray-100 rounded-xl shadow-inner">
                                <img
                                    src={plans[activeTab].image}
                                    alt="Floor Plan"
                                    className="w-full h-auto object-contain transform hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>

                        {/* Right - Tabs & Details */}
                        <div className="w-full lg:w-1/2">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {Object.keys(plans).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`px-6 py-2 rounded-md font-bold text-white transition-all transform hover:-translate-y-1 ${activeTab === key ? plans[key].color + ' shadow-lg scale-105' : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    >
                                        {key.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            {/* Details */}
                            <div className="space-y-6 text-center lg:text-left animate-fade-in">
                                <div>
                                    <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-1">Type</h3>
                                    <p className="text-3xl font-serif font-bold text-secondary">{plans[activeTab].type}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-1">Area</h3>
                                    <p className="text-2xl font-serif text-secondary">{plans[activeTab].area}</p>
                                </div>
                                <div>
                                    <h3 className="text-gray-500 uppercase tracking-widest text-sm mb-1">Price</h3>
                                    <p className="text-xl font-medium text-primary cursor-pointer hover:underline">{plans[activeTab].price}</p>
                                </div>

                                <button className="mt-4 bg-gradient-to-r from-primary to-green-400 text-white px-8 py-3 rounded shadow-lg hover:shadow-xl transition-all duration-300 font-bold uppercase tracking-wide w-full md:w-auto">
                                    Download Floor Plan
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails Row (Visual only) */}
                    <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-100">
                        {Object.keys(plans).map((key) => (
                            <div
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`cursor-pointer border-2 rounded-lg p-2 transition-colors ${activeTab === key ? 'border-primary' : 'border-transparent hover:border-gray-200'}`}
                            >
                                <img src={plans[key].image} alt="Thumbnail" className="w-full h-20 object-contain opacity-80" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;
