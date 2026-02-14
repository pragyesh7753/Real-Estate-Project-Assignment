import { useState } from 'react';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    if (!faqs || faqs.length === 0) return null;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white" id="faq">
            <div className="container mx-auto px-6">
                <h2 className="section-title mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq._id}
                            className="border border-green-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={`w-full text-left px-6 py-4 transition-colors duration-200 flex justify-between items-center ${openIndex === index ? 'bg-primary text-white' : 'bg-green-50 hover:bg-green-100 text-secondary'
                                    }`}
                            >
                                <span className="font-semibold text-lg font-serif">
                                    {faq.question}
                                </span>
                                <span className="text-2xl font-light">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-6 bg-white animate-fade-in">
                                    <p className="text-gray-700 leading-relaxed font-sans">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
