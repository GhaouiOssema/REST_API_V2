const services = require("../../services");

const CreatUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const User = await services.User.create.Create_User(
            firstName,
            lastName,
            email,
            password
        );
        res.status(200).json({
            status: true,
            message: "User Was created Successfuly",
            data: User,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: false, message: err });
    }
};

module.exports = { CreatUser };
