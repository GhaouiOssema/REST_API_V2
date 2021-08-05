const services = require("../../services");

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const User = await services.User.update.getUserById(id);
        if (User) {
            await services.User.delete.getUserByIdandDelete(id);
            res.status(200).json({
                status: false,
                message: "User Deleted Successfuly !!! ",
                data: User,
            });
        } else {
            res.status(404).json({ status: false, message: "User not Found " });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
};

module.exports = { deleteUser };
