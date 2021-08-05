const services = require("../../services");

const getUsers = async (req, res) => {
    try {
        const UsersList = await services.User.get.getUsers();
        res.status(200).json({
            status: true,
            message: "All Users",
            data: UsersList,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: "cannot find any User ",
        });
    }
};

module.exports = { getUsers };
