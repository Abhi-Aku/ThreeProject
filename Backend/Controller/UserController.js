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

module.exports.UpdateData = async (req, res) => {
        const { id } = req.params;
        const { name, email, password } = req.body;
        try {
            const updatedUser = await DataUser.findByIdAndUpdate(id, { name, email, password }, { new: true });
    
            if (!updatedUser) {
                return res.status(404).json({ message: "User not found" });
            }
    
            console.log("Data updated successfully");
    
            res.status(200).json({ message: "Data updated successfully", updatedUser });
    
        } catch (err) {
            console.error("Error updating data:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    };

    module.exports . DeleteData = async (req, res) => {
        const{id}=req.params;
        try {
            const deletedUser = await DataUser.findByIdAndDelete(id);
    
            if (!deletedUser) {
                return res.status(404).json({ message: "User not found" });
            }
    
            console.log("Data deleted successfully");
    
            res.status(200).json({ message: "Data deleted successfully", deletedUser });
        }catch(err){
            console.error("Error deleting data:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    };
