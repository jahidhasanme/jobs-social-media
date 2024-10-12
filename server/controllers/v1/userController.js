const bcrypt = require('bcryptjs');
const User = require('../../models/v1/User');

// Get all users with pagination
exports.getUsers = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : null;
        const skip = (page - 1) * (limit || 0);

        let users;
        let total;

        if (limit) {
            users = await User.find().select('-password').skip(skip).limit(limit);
            total = await User.countDocuments();
        } else {
            users = await User.find().select('-password');
            total = users.length;
        }

        res.status(200).json({
            success: true,
            data: users,
            pagination: limit ? {
                total,
                page,
                pages: Math.ceil(total / limit)
            } : null
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single user
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    try {
        const updates = { ...req.body };
        delete updates.password;

        if (req.params.id !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ success: false, error: 'Not authorized to update this user' });
        }

        if (req.user.role !== 'admin') {
            delete updates.role;
        }

        const user = await User.findByIdAndUpdate(req.params.id, updates, {
            new: true,
            runValidators: true,
        });

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        const userResponse = user.toObject();
        delete userResponse.password;

        res.status(200).json({ success: true, data: userResponse });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


// Update user password
exports.updatePassword = async (req, res) => {
    try {

        if (req.params.id !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ success: false, error: 'Not authorized to update password this user' });
        }

        if (req.user.role !== 'admin') {
            delete updates.role;
        }

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        const { currentPassword, newPassword } = req.body;

        const isMatch = await user.matchPassword(currentPassword);

        if (!isMatch) {
            return res.status(400).json({ success: false, error: 'Incorrect current password' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);

        await user.save();

        res.status(200).json({ success: true, data: 'Password updated successfully' });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};