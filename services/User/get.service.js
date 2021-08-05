const User = require("../../models/User");

const getUsers = async () => {
    try {
        return await User.find({});
    } catch (err) {
        return err;
    }
};

module.exports = { getUsers };
