const User = require("../model/User");

const UserController = {
  getAllUsers: async (_, res) => {
    try {
      const user = await User.findAll();
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },

  createUser: async (req, res) => {
    try {
      const { nama, tanggal_lahir, tempat_lahir, alamat } = req.body;
      const newUser = await User.create({
        nama,
        tanggal_lahir,
        tempat_lahir,
        alamat
      });
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: `Failed to create user ${err}` });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { nama, tanggal_lahir, tempat_lahir, alamat } = req.body;
      if ((nama, tanggal_lahir, tempat_lahir, alamat)) {
        const [updatedRowsCount] = await User.update(
          { nama, tanggal_lahir, tempat_lahir, alamat },
          { where: { id: req.params.id } }
        );
      } else {
        return res.send("The field must not be empty")
      }

      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  },

  patchUser: async (req, res) => {
    try {
      const { nama, tanggal_lahir, tempat_lahir, alamat } = req.body;
      const [updatedRowsCount] = await User.update(
        { nama, tanggal_lahir, tempat_lahir, alamat },
        { where: { id: req.params.id } }
      );
      if (updatedRowsCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedRowCount = await User.destroy({
        where: { id: req.params.id }
      });
      if (deletedRowCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  }
};

module.exports = UserController;
