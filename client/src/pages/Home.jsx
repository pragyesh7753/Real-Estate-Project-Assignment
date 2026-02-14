import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Connectivity from '../components/Connectivity';
import Amenities from '../components/Amenities';
import About from '../components/About';
import Construction from '../components/Construction';
import FAQ from '../components/FAQ';

const Home = () => {
    const [sections, setSections] = useState({});
    const [amenities, setAmenities] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);

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

            // Convert sections array to object keyed by section name
            const sectionsObj = {};
            sectionsRes.data.data.forEach((section) => {
                console.log('Processing section:', section.sectionName);
                sectionsObj[section.sectionName] = section;
            });
            console.log('Final sections object keys:', Object.keys(sectionsObj));

            setSections(sectionsObj);
            setAmenities(amenitiesRes.data.data);
            setFaqs(faqsRes.data.data);
        } catch (error) {
            toast.error('Failed to load content');
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-700">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <Hero data={sections.hero} />
            <Overview data={sections.overview} />
            <Connectivity data={sections.connectivity} />
            <Amenities amenities={amenities} />
            <About data={sections.about} />
            <Construction data={sections.construction} />
            <FAQ faqs={faqs} />
        </div>
    );
};

export default Home;
