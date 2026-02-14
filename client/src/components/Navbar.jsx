import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: '#home' },
        { name: 'Overview', to: '#overview' },
        { name: 'Amenities', to: '#amenities' },
        { name: 'Township', to: '#township' },
        { name: 'Floor Plans', to: '#floor-plans' },
        { name: 'Connectivity', to: '#connectivity' },
        { name: 'Construction', to: '#construction' },
        { name: 'Developer', to: '#developer' },
        { name: 'Contact', to: '#contact' },
    ];

    const handleScrollToSection = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (location.pathname !== '/') {
            // Navigate to home first, then scroll (handled by useEffect on Home or timeout)
            window.location.href = `/${id}`;
        } else {
            // If already on home, smooth scroll
            const element = document.querySelector(id);
            if (element) {
                // Account for fixed navbar height (approx 80px)
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <svg className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" />
                    </svg>
                    <div className="flex flex-col">
                        <span className={`font-serif font-bold text-xl leading-none ${isScrolled ? 'text-secondary' : 'text-secondary'}`}>
                            LIMS ROOFING
                        </span>
                        <span className="text-[10px] tracking-widest uppercase text-primary">Building Your Dreams</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.to}
                            onClick={(e) => handleScrollToSection(e, link.to)}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-primary text-white px-6 py-2 rounded shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 font-semibold text-sm uppercase tracking-wide">
                        Enquiry Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-secondary focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col items-center gap-4 animate-nav-slide-down">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.to}
                            onClick={(e) => handleScrollToSection(e, link.to)}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-primary text-white px-8 py-3 rounded shadow-lg hover:bg-primary-dark transition-all font-semibold text-sm uppercase tracking-wide w-3/4">
                        Enquiry Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
