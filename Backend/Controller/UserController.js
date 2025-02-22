const DataUser = require('../Models/User');

module.exports.PostData = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = await DataUser.create({ name, email, password });

        console.log("Data saved successfully");

        res.status(200).json({ message: "Data saved successfully", newUser });

    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.GetData = async (req, res) => {
    try {
        const users = await DataUser.find();
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
