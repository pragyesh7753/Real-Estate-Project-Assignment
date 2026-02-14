const authMiddleware = (req, res, next) => {
    if (req.session && req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({
            success: false,
            message: 'Unauthorized. Please login first.',
        });
    }
};

module.exports = authMiddleware;
