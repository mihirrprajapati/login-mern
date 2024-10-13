import RegisterModel from "../models/RegisterModel.js";

const getAll = (req, res) => {
  RegisterModel.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
};

const addUser = async (req, res) => {
  const newUser = new RegisterModel(req.body);

  await newUser.save();

  res.json(newUser);
};

const isUserValid = async (req, res) => {
  const { email, password } = req.body;
  const em = await RegisterModel.findOne({ email, password });

  if (!em) {
    res.json({ isvalid: false });
  } else {
    res.json({ isvalid: true });
  }
};

export { getAll, addUser, isUserValid };
