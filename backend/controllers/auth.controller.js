const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      message: "User created",
      user,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid Credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        error: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { _id: user._id, name: user.name, role: user.role, email: user.email },
      "gdshuhf7hbsdy87",
      { expiresIn: "7d" },
    );

    res.status(200).json({
      message: "login success",
      token,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {register, login};