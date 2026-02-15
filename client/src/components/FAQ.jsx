import { useState } from 'react';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50" id="faq">
            <div className="container mx-auto px-6">
                <h2 className="section-title mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className="border border-green-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md bg-white"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left px-6 py-4 transition-colors duration-200 flex justify-between items-center ${openIndex === index ? 'bg-primary/5 text-primary' : 'bg-white hover:bg-green-50 text-secondary'
                                    }`}
                            >
                                <span className="font-semibold text-lg font-serif">
                                    {faq.question}
                                </span>
                                <span className={`text-2xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                    +
                                </span>
                            </button>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 py-6 border-t border-gray-100">
                                        <p className="text-gray-700 leading-relaxed font-sans">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
