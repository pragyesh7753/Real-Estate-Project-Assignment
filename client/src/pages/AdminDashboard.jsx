import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const [sections, setSections] = useState([]);
    const [amenities, setAmenities] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingSection, setEditingSection] = useState(null);
    const [editingAmenity, setEditingAmenity] = useState(null);
    const [editingFaq, setEditingFaq] = useState(null);
    const [newAmenity, setNewAmenity] = useState({ title: '', description: '' });
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

    // Section Management
    const handleSectionEdit = (section) => {
        setEditingSection({ ...section });
    };

    const handleSectionSave = async (id) => {
        try {
            await api.put(`/sections/${id}`, editingSection);
            toast.success('Section updated successfully');
            setEditingSection(null);
            fetchData();
        } catch {
            toast.error('Failed to update section');
        }
    };

    // Amenity Management
    const handleAmenityEdit = (amenity) => {
        setEditingAmenity({ ...amenity });
    };

    const handleAmenitySave = async (id) => {
        try {
            await api.put(`/amenities/${id}`, editingAmenity);
            toast.success('Amenity updated successfully');
            setEditingAmenity(null);
            fetchData();
        } catch {
            toast.error('Failed to update amenity');
        }
    };

    const handleAmenityAdd = async () => {
        if (!newAmenity.title || !newAmenity.description) {
            toast.error('Please fill in all fields');
            return;
        }
        try {
            await api.post('/amenities', newAmenity);
            toast.success('Amenity added successfully');
            setNewAmenity({ title: '', description: '' });
            fetchData();
        } catch {
            toast.error('Failed to add amenity');
        }
    };

    const handleAmenityDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this amenity?')) return;
        try {
            await api.delete(`/amenities/${id}`);
            toast.success('Amenity deleted successfully');
            fetchData();
        } catch {
            toast.error('Failed to delete amenity');
        }
    };

    // FAQ Management
    const handleFaqEdit = (faq) => {
        setEditingFaq({ ...faq });
    };

    const handleFaqSave = async (id) => {
        try {
            await api.put(`/faqs/${id}`, editingFaq);
            toast.success('FAQ updated successfully');
            setEditingFaq(null);
            fetchData();
        } catch {
            toast.error('Failed to update FAQ');
        }
    };

    const handleFaqAdd = async () => {
        if (!newFaq.question || !newFaq.answer) {
            toast.error('Please fill in all fields');
            return;
        }
        try {
            await api.post('/faqs', newFaq);
            toast.success('FAQ added successfully');
            setNewFaq({ question: '', answer: '' });
            fetchData();
        } catch {
            toast.error('Failed to add FAQ');
        }
    };

    const handleFaqDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this FAQ?')) return;
        try {
            await api.delete(`/faqs/${id}`);
            toast.success('FAQ deleted successfully');
            fetchData();
        } catch {
            toast.error('Failed to delete FAQ');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="container mx-auto px-6 py-8">
                {/* Sections Management */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Sections</h2>
                    <div className="space-y-6">
                        {sections.map((section) => (
                            <div key={section._id} className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-700 capitalize">
                                    {section.section}
                                </h3>
                                {editingSection && editingSection._id === section._id ? (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                value={editingSection.title}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, title: e.target.value })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Subtitle
                                            </label>
                                            <input
                                                type="text"
                                                value={editingSection.subtitle || ''}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, subtitle: e.target.value })
                                                }
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Description
                                            </label>
                                            <textarea
                                                value={editingSection.description || ''}
                                                onChange={(e) =>
                                                    setEditingSection({ ...editingSection, description: e.target.value })
                                                }
                                                rows="4"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            />
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleSectionSave(section._id)}
                                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingSection(null)}
                                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <p className="text-gray-700 mb-2">
                                            <strong>Title:</strong> {section.title}
                                        </p>
                                        {section.subtitle && (
                                            <p className="text-gray-700 mb-2">
                                                <strong>Subtitle:</strong> {section.subtitle}
                                            </p>
                                        )}
                                        {section.description && (
                                            <p className="text-gray-700 mb-4">
                                                <strong>Description:</strong> {section.description}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => handleSectionEdit(section)}
                                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Amenities Management */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage Amenities</h2>

                    {/* Add New Amenity */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Amenity</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                value={newAmenity.title}
                                onChange={(e) => setNewAmenity({ ...newAmenity, title: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <textarea
                                placeholder="Description"
                                value={newAmenity.description}
                                onChange={(e) => setNewAmenity({ ...newAmenity, description: e.target.value })}
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <button
                                onClick={handleAmenityAdd}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Add Amenity
                            </button>
                        </div>
                    </div>

                    {/* Existing Amenities */}
                    <div className="space-y-6">
                        {amenities.map((amenity) => (
                            <div key={amenity._id} className="bg-white rounded-lg shadow-md p-6">
                                {editingAmenity && editingAmenity._id === amenity._id ? (
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={editingAmenity.title}
                                            onChange={(e) =>
                                                setEditingAmenity({ ...editingAmenity, title: e.target.value })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        <textarea
                                            value={editingAmenity.description}
                                            onChange={(e) =>
                                                setEditingAmenity({ ...editingAmenity, description: e.target.value })
                                            }
                                            rows="3"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleAmenitySave(amenity._id)}
                                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingAmenity(null)}
                                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                                            {amenity.title}
                                        </h4>
                                        <p className="text-gray-700 mb-4">{amenity.description}</p>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleAmenityEdit(amenity)}
                                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleAmenityDelete(amenity._id)}
                                                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs Management */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Manage FAQs</h2>

                    {/* Add New FAQ */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New FAQ</h3>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Question"
                                value={newFaq.question}
                                onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <textarea
                                placeholder="Answer"
                                value={newFaq.answer}
                                onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                                rows="3"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <button
                                onClick={handleFaqAdd}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                            >
                                Add FAQ
                            </button>
                        </div>
                    </div>

                    {/* Existing FAQs */}
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq._id} className="bg-white rounded-lg shadow-md p-6">
                                {editingFaq && editingFaq._id === faq._id ? (
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            value={editingFaq.question}
                                            onChange={(e) =>
                                                setEditingFaq({ ...editingFaq, question: e.target.value })
                                            }
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        <textarea
                                            value={editingFaq.answer}
                                            onChange={(e) =>
                                                setEditingFaq({ ...editingFaq, answer: e.target.value })
                                            }
                                            rows="3"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleFaqSave(faq._id)}
                                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingFaq(null)}
                                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2 text-gray-800">
                                            {faq.question}
                                        </h4>
                                        <p className="text-gray-700 mb-4">{faq.answer}</p>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleFaqEdit(faq)}
                                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleFaqDelete(faq._id)}
                                                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
