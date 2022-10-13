import User from "../model/userSchema.js";

export const userSignup = async (req, res) => {
  try {
    const userAlreadyExist = await User.findOne({
      username: req.body.username,
    });
    if (userAlreadyExist) {
      return res.status(401).json({ message: "username already exists" });
    }
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    return res
      .status(200)
      .json({ message: "user successfully created", user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username: username, password: password });
    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json({ message: "invalid login " });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
