// Fixed admin credentials
const ADMIN_EMAIL = 'admin@gmail.com';
const ADMIN_PASSWORD = '1234';

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide email and password',
            });
        }

        // Check credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Create session
            req.session.isAuthenticated = true;
            req.session.adminEmail = email;

            res.status(200).json({
                success: true,
                message: 'Login successful',
                admin: {
                    email: email,
                },
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Invalid credentials',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Logout admin
// @route   POST /api/auth/logout
// @access  Private
const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Could not logout',
                });
            }

            res.status(200).json({
                success: true,
                message: 'Logout successful',
            });
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// @desc    Check authentication status
// @route   GET /api/auth/check
// @access  Public
const checkAuth = async (req, res) => {
    try {
        if (req.session && req.session.isAuthenticated) {
            res.status(200).json({
                success: true,
                isAuthenticated: true,
                admin: {
                    email: req.session.adminEmail,
                },
            });
        } else {
            res.status(401).json({
                success: false,
                isAuthenticated: false,
                message: 'Not authenticated',
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

module.exports = {
    login,
    logout,
    checkAuth,
};

