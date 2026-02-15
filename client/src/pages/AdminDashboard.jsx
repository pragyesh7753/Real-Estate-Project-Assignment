import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    Layers,
    Coffee,
    MessageSquare,
    LogOut,
    Plus,
    Edit2,
    Trash2,
    Search,
    ChevronRight
} from 'lucide-react';
import { StatCard, SidebarItem, Modal, Header } from '../components/AdminComponents';

const AdminDashboard = () => {
    const [sections, setSections] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    // Modal States
    const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);
    const [isAmenityModalOpen, setIsAmenityModalOpen] = useState(false);
    const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);

    // Edit States
    const [editingSection, setEditingSection] = useState(null);
    const [editingAmenity, setEditingAmenity] = useState(null);
    const [editingFaq, setEditingFaq] = useState(null);

    // New Item States
    const [newAmenity, setNewAmenity] = useState({ title: '', description: '', imageUrl: '' });
    const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setLoading(true);
            const [sectionsRes, amenitiesRes, faqsRes] = await Promise.all([
                api.get('/sections'),
                api.get('/amenities'),
                api.get('/faqs'),
            ]);
            setSections(sectionsRes.data.data);
            setAmenities(amenitiesRes.data.data);
            setFaqs(faqsRes.data.data);
        } catch {
            toast.error('Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        toast.success('Logged out successfully');
        navigate('/admin');
    };

    // Generic Handlers for Modal Opening
    const openSectionEdit = (section) => {
        setEditingSection({ ...section });
        setIsSectionModalOpen(true);
    };

    const openAmenityEdit = (amenity) => {
        setEditingAmenity({ ...amenity });
        setIsAmenityModalOpen(true);
    };

    const openFaqEdit = (faq) => {
        setEditingFaq({ ...faq });
        setIsFaqModalOpen(true);
    };

    // Save Handlers
    const handleSectionSave = async () => {
        try {
            await api.put(`/sections/${editingSection._id}`, editingSection);
            toast.success('Section updated');
            setIsSectionModalOpen(false);
            fetchData();
        } catch {
            toast.error('Failed to update section');
        }
    };

    const handleAmenitySave = async (isNew = false) => {
        const item = isNew ? newAmenity : editingAmenity;
        if (!item.title || !item.description) {
            toast.error('Fill required fields');
            return;
        }

        try {
            if (isNew) {
                await api.post('/amenities', newAmenity);
                toast.success('Amenity added');
                setNewAmenity({ title: '', description: '', imageUrl: '' });
                setIsAmenityModalOpen(false); // Close if open
            } else {
                await api.put(`/amenities/${editingAmenity._id}`, editingAmenity);
                toast.success('Amenity updated');
                setIsAmenityModalOpen(false);
            }
            fetchData();
        } catch {
            toast.error('Operation failed');
        }
    };

    const handleFaqSave = async (isNew = false) => {
        const item = isNew ? newFaq : editingFaq;
        if (!item.question || !item.answer) {
            toast.error('Fill required fields');
            return;
        }

        try {
            if (isNew) {
                await api.post('/faqs', newFaq);
                toast.success('FAQ added');
                setNewFaq({ question: '', answer: '' });
                setIsFaqModalOpen(false);
            } else {
                await api.put(`/faqs/${editingFaq._id}`, editingFaq);
                toast.success('FAQ updated');
                setIsFaqModalOpen(false);
            }
            fetchData();
        } catch {
            toast.error('Operation failed');
        }
    };

    // Delete Handlers
    const handleDelete = async (endpoint, id, type) => {
        if (!window.confirm(`Delete this ${type}?`)) return;
        try {
            await api.delete(`/${endpoint}/${id}`);
            toast.success(`${type} deleted`);
            fetchData();
        } catch {
            toast.error(`Failed to delete ${type}`);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                        <StatCard
                            title="Total Sections"
                            value={sections.length}
                            icon={Layers}
                            color="bg-blue-50 text-blue-600"
                        />
                        <StatCard
                            title="Total Amenities"
                            value={amenities.length}
                            icon={Coffee}
                            color="bg-green-50 text-green-600"
                        />
                        <StatCard
                            title="Total FAQs"
                            value={faqs.length}
                            icon={MessageSquare}
                            color="bg-purple-50 text-purple-600"
                        />
                    </div>
                );
            case 'sections':
                return (
                    <div className="animate-fade-in">
                        <Header
                            title="Website Sections"
                            subtitle="Manage the main content sections of your landing page."
                        />
                        <div className="grid grid-cols-1 gap-6">
                            {sections.map((section) => (
                                <div key={section._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded font-semibold uppercase tracking-wide">
                                                {section.section}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">{section.title}</h3>
                                        {section.subtitle && <p className="text-sm text-gray-500 italic mb-2">{section.subtitle}</p>}
                                        <p className="text-gray-600 text-sm line-clamp-2">{section.description}</p>
                                    </div>
                                    <button
                                        onClick={() => openSectionEdit(section)}
                                        className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-light transition-colors text-sm font-medium"
                                    >
                                        <Edit2 size={16} /> Edit
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'amenities':
                return (
                    <div className="animate-fade-in">
                        <Header
                            title="Amenities"
                            subtitle="Showcase the features and facilities available."
                            action={
                                <button
                                    onClick={() => { setEditingAmenity(null); setIsAmenityModalOpen(true); }}
                                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 font-semibold text-sm"
                                >
                                    <Plus size={18} /> Add Amenity
                                </button>
                            }
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {amenities.map((amenity) => (
                                <div key={amenity._id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-300">
                                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                                        {amenity.imageUrl ? (
                                            <img src={amenity.imageUrl} alt={amenity.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-400">
                                                <Coffee size={48} />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
                                            <button
                                                onClick={() => openAmenityEdit(amenity)}
                                                className="p-2 bg-white/90 text-secondary rounded-full hover:bg-white transition-colors"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete('amenities', amenity._id, 'amenity')}
                                                className="p-2 bg-red-500/90 text-white rounded-full hover:bg-red-600 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-serif font-bold text-lg text-gray-800 mb-2">{amenity.title}</h3>
                                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{amenity.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'faqs':
                return (
                    <div className="animate-fade-in">
                        <Header
                            title="Questions & Answers"
                            subtitle="Manage commonly asked questions by customers."
                            action={
                                <button
                                    onClick={() => { setEditingFaq(null); setIsFaqModalOpen(true); }}
                                    className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 font-semibold text-sm"
                                >
                                    <Plus size={18} /> Add FAQ
                                </button>
                            }
                        />
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq._id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg shrink-0">
                                                <MessageSquare size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-serif font-bold text-gray-800 mb-2">{faq.question}</h4>
                                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 shrink-0">
                                            <button
                                                onClick={() => openFaqEdit(faq)}
                                                className="p-2 text-gray-400 hover:text-secondary hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete('faqs', faq._id, 'FAQ')}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-20 hidden lg:flex flex-col">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-serif font-bold text-secondary">LIMS Admin</h2>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Management Console</p>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <SidebarItem
                        icon={LayoutDashboard}
                        label="Dashboard"
                        active={activeTab === 'dashboard'}
                        onClick={() => setActiveTab('dashboard')}
                    />
                    <SidebarItem
                        icon={Layers}
                        label="Sections"
                        active={activeTab === 'sections'}
                        onClick={() => setActiveTab('sections')}
                    />
                    <SidebarItem
                        icon={Coffee}
                        label="Amenities"
                        active={activeTab === 'amenities'}
                        onClick={() => setActiveTab('amenities')}
                    />
                    <SidebarItem
                        icon={MessageSquare}
                        label="FAQ's"
                        active={activeTab === 'faqs'}
                        onClick={() => setActiveTab('faqs')}
                    />
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 w-full bg-white z-20 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-serif font-bold text-secondary">LIMS Admin</h2>
                <div className="flex gap-4">
                    {/* Simplified Mobile Nav could go here */}
                    <button onClick={handleLogout} className="text-gray-600"><LogOut size={20} /></button>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 p-6 lg:p-10 pt-20 lg:pt-10">
                {renderContent()}
            </main>

            {/* Modals */}

            {/* Section Modal */}
            <Modal
                isOpen={isSectionModalOpen}
                onClose={() => setIsSectionModalOpen(false)}
                title="Edit Section"
            >
                {editingSection && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                value={editingSection.title}
                                onChange={(e) => setEditingSection({ ...editingSection, title: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                            <input
                                type="text"
                                value={editingSection.subtitle || ''}
                                onChange={(e) => setEditingSection({ ...editingSection, subtitle: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                value={editingSection.description || ''}
                                onChange={(e) => setEditingSection({ ...editingSection, description: e.target.value })}
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                                type="text"
                                value={editingSection.imageUrl || ''}
                                onChange={(e) => setEditingSection({ ...editingSection, imageUrl: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all"
                            />
                        </div>
                        <button
                            onClick={handleSectionSave}
                            className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary-light transition-colors font-semibold"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </Modal>

            {/* Amenity Modal */}
            <Modal
                isOpen={isAmenityModalOpen}
                onClose={() => setIsAmenityModalOpen(false)}
                title={editingAmenity ? 'Edit Amenity' : 'Add Amenity'}
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={editingAmenity ? editingAmenity.title : newAmenity.title}
                            onChange={(e) => editingAmenity
                                ? setEditingAmenity({ ...editingAmenity, title: e.target.value })
                                : setNewAmenity({ ...newAmenity, title: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={editingAmenity ? editingAmenity.description : newAmenity.description}
                            onChange={(e) => editingAmenity
                                ? setEditingAmenity({ ...editingAmenity, description: e.target.value })
                                : setNewAmenity({ ...newAmenity, description: e.target.value })
                            }
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="text"
                            value={editingAmenity ? (editingAmenity.imageUrl || '') : newAmenity.imageUrl}
                            onChange={(e) => editingAmenity
                                ? setEditingAmenity({ ...editingAmenity, imageUrl: e.target.value })
                                : setNewAmenity({ ...newAmenity, imageUrl: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <button
                        onClick={() => handleAmenitySave(!editingAmenity)}
                        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                    >
                        {editingAmenity ? 'Save Changes' : 'Add Amenity'}
                    </button>
                </div>
            </Modal>

            {/* FAQ Modal */}
            <Modal
                isOpen={isFaqModalOpen}
                onClose={() => setIsFaqModalOpen(false)}
                title={editingFaq ? 'Edit FAQ' : 'Add FAQ'}
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                        <input
                            type="text"
                            value={editingFaq ? editingFaq.question : newFaq.question}
                            onChange={(e) => editingFaq
                                ? setEditingFaq({ ...editingFaq, question: e.target.value })
                                : setNewFaq({ ...newFaq, question: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                        <textarea
                            value={editingFaq ? editingFaq.answer : newFaq.answer}
                            onChange={(e) => editingFaq
                                ? setEditingFaq({ ...editingFaq, answer: e.target.value })
                                : setNewFaq({ ...newFaq, answer: e.target.value })
                            }
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <button
                        onClick={() => handleFaqSave(!editingFaq)}
                        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                    >
                        {editingFaq ? 'Save Changes' : 'Add FAQ'}
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default AdminDashboard;
