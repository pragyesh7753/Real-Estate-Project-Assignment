import { useState } from 'react';

const Township = ({ data }) => {

    if (!data || !data.content || !data.content.buildings) return null;

    const buildings = data.content.buildings;

    return (
        <section className="py-20 bg-white" id="township">
            <div className="container mx-auto px-6">
                <h2 className="section-title mb-12">Explore More Buildings in the Township</h2>

                <div className="relative max-w-5xl mx-auto">
                    {/* Carousel Content */}
                    <div className="flex gap-6 overflow-hidden">
                        {/* We show 3 cards but focusing on one logic for simplicity in this static version, 
                            in a real app we'd use a carousel library like Swiper */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {buildings.map((building, index) => (
                                <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group h-[450px]">
                                    <img
                                        src={building.image}
                                        alt={building.name}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                                        <div className="bg-primary/90 text-white text-xs px-2 py-1 inline-block rounded mb-2 uppercase tracking-wide">
                                            {building.status}
                                        </div>
                                        <h3 className="text-white text-lg font-bold">{building.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Township;
