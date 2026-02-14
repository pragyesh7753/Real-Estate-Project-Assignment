import { useState } from 'react';

const Township = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!data || !data.content || !data.content.buildings) return null;

    const buildings = data.content.buildings;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % buildings.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + buildings.length) % buildings.length);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-accent/40 to-white" id="township">
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

                    {/* Navigation Buttons (Visual only for this static grid layout, functionally would slide) */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white text-secondary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white text-secondary p-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors z-10"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Township;
