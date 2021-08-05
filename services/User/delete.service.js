const User = require("../../models/User");

const getUserByIdandDelete = async (id) => {
    try {
        return await User.findByIdAndDelete(id);
    } catch (err) {
        return err;
    }
};

module.exports = { getUserByIdandDelete };
