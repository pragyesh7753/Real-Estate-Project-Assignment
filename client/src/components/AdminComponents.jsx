import { X } from 'lucide-react';

export const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-center justify-between">
        <div>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">{title}</p>
            <h3 className="text-3xl font-serif font-bold text-gray-800">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${color || 'bg-primary/10 text-primary'}`}>
            <Icon size={24} />
        </div>
    </div>
);

export const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${active
            ? 'bg-primary text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
            }`}
    >
        <Icon size={20} className={active ? 'text-white' : 'text-gray-500 group-hover:text-primary'} />
        <span className={`font-medium ${active ? 'font-semibold' : ''}`}>{label}</span>
    </button>
);

export const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up">
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <h3 className="text-xl font-serif font-bold text-gray-800">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-red-500 transition-colors bg-gray-50 hover:bg-red-50 p-2 rounded-full"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Header = ({ title, subtitle, action }) => (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
            <h2 className="text-2xl font-serif font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {action}
    </div>
);
