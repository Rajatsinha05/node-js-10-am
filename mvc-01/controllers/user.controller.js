const User = require("../model/user_schema");
const multer = require("multer");
const getUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};

const createUser = async (req, res) => {
  console.log("req.body:", req.body);
  console.log("req.files:", req.file);

  let { name, email, psw } = req.body;
  let profile;
  if (req.file) {
    profile = req.file.path;
  }

  let user = {
    name,
    email,
    psw,
    profile,
  };
  let data = await User.create(user);
  res.send(data);
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndUpdate(id, req.body, { new: true });

  res.send(data);
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  let data = await User.findByIdAndDelete(id);
  res.send(data);
};

// file upload

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = { getUser, updateUser, deleteUser, createUser, upload };
