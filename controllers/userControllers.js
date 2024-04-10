import userManager from '../../models/User.js';

// controller for new user
export const createUser = async (req, res) => {
  console.log(req.body)
  try {

    const newUsers = await userManager.create(req.body);
    console.log(newUsers)
    res.status(200).json(newUsers)
  } catch (error){
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all users
export const getAllUsers = async (req, res) => {
    try {
      const users = await userManager.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // Controller to update all users
export const updateUser = async (req, res) => {
  try {
      const updatedUser = await userManager.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedUser);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

 // Controller to delete all users
export const deleteUser = async (req, res) => {
  try {
      await userManager.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};
  