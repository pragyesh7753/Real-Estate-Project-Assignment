import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <svg className="h-10 w-10 text-primary brightness-200" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z" />
                            </svg>
                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl leading-none">LIMS ROOFING</span>
                                <span className="text-[10px] tracking-widest uppercase text-white/60">Building Your Dreams</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Experience the finest in luxury living. Our projects are designed to provide the perfect blend of comfort, style, and sustainability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Project</a></li>
                            <li><a href="#amenities" className="hover:text-primary transition-colors">Amenities</a></li>
                            <li><a href="#floor-plans" className="hover:text-primary transition-colors">Floor Plans</a></li>
                            <li><a href="#construction" className="hover:text-primary transition-colors">Construction Updates</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span>BLDG. NO. 223/224, CIRCLE : KANNAMWAR NAGAR I, VIKHROLI (EAST)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span>info@limsroofing.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Admin Access (Hidden link for convenience) */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-6">Admin</h4>
                        <Link to="/admin" className="text-white/50 text-xs hover:text-white transition-colors">
                            Admin Login
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>&copy; 2026 LIMS Roofing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
