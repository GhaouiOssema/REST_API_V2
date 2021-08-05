const User = require("../../models/User");

const getUserById = async (id) => {
    try {
        return await User.findById(id);
    } catch (err) {
        return err;
    }
};

const getUserByIdandUpdate = async (id, update) => {
    try {
        return await User.findByIdAndUpdate(id, { ...update });
    } catch (err) {
        return err;
    }
};

module.exports = { getUserByIdandUpdate, getUserById };
