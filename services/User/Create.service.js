const User = require("../../models/User");

const Create_User = async (firstName, lastName, email, password) => {
    try {
        return await User.create({ firstName, lastName, email, password });
    } catch (err) {
        return err;
    }
};

module.exports = { Create_User };
