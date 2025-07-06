import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const RegesterUser = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      const error = new Error("All fild are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User all ready exist");
      error.statusCode = 409;
      return next(error);
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password: hashedpassword,
    });

    res.status(201).json({ message: " User regester sucessful" });
  } catch (error) {
    next(error);
  }
};

export const LoginUser =async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fild are required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
     if (!user) {
      const error = new Error("User not Regester yet");
      error.statusCode = 400;
      return next(error);
    }

    const isVerifide =await bcrypt.compare(password,user.password)
    if(!isVerifide){
         const error = new Error("Invalid user or passwprd");
      error.statusCode = 401;
      return next(error);
    }

    res.status(200).json({message:`welcome back ${user.fullName}`})
  } catch (error) {
    next(error)
  }
};

export const LogoutUser = (req, res) => {
  res.json({ message: "logout ho gaya hai" });
};

export const UpdateUser = (req, res) => {
  res.json({ message: "update ho gaya hai" });
};
