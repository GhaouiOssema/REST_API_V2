const services = require("../../services");

const updataUser = async (req, res) => {
    try {
        const { id } = req.params;
        let upUser = await services.User.update.getUserById(id);
        if (upUser) {
            upUser = await services.User.update.getUserByIdandUpdate(
                id,
                req.body
            );
            res.status(200).json({
                status: true,
                message: "user updated successfuly !!!",
            });
        } else {
            res.status(404).json({
                status: false,
                message: "User not Found !!!",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: false,
            message: " your profile is not up TO DATE !!! ",
        });
    }
};

module.exports = { updataUser };
