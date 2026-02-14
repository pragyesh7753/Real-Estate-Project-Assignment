import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

import { useLocation } from 'react-router';

// Layout component to handle conditional rendering of Navbar/Footer
const Layout = ({ children }) => {
    const location = useLocation();
    // Check if the current path starts with /admin
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <>
            {!isAdminRoute && <Navbar />}
            {children}
            {!isAdminRoute && <Footer />}
        </>
    );
};

function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<AdminLogin />} />
                        <Route
                            path="/admin/dashboard"
                            element={
                                <ProtectedRoute>
                                    <AdminDashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Layout>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Router>
        </AuthProvider>
    );
}

export default App;