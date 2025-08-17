import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import genToken from "../utils/auth.js";
import cloudinary from "cloudinary";

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
    const profilpic = `https://placehold.co/600x400?text=${fullName
      .charAt(0)
      .toUpperCase()}`;
    console.log(fullName);

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password: hashedpassword,
      photo: profilpic,
    });

    res.status(201).json({ message: " User regester sucessful" });
  } catch (error) {
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
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

    const isVerifide = await bcrypt.compare(password, user.password);
    if (!isVerifide) {
      const error = new Error("Invalid user or passwprd");
      error.statusCode = 401;
      return next(error);
    }
    let token = genToken(user._id, res);

    res.status(200).json({ message: `welcome back ${user.fullName}`, token });
  } catch (error) {
    next(error);
  }
};

export const LogoutUser = (req, res, next) => {
  try {
    res.cookie("IDCard", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    next(error);
  }
};

export const UpdateUser = async (req, res, next) => {
  try {
    const currentUser = req.user;

    console.log("Current User:", currentUser);
    

    console.log(currentUser);
    
    const {
      fullName,
      phone,
      gender,
      occupation,
      address,
      city,
      state,
      district,
      representing,
    } = req.body;

    console.log("Incoming file:", req.file);
    console.log("Incoming body:", req.body);

    if (!currentUser) {
      console.log("user not found in updateUser in userVController");
      const error = new Error("User not found !! login again");
      error.statusCode = 401;
      return next(error);
    }

    const photo = req.file;
    let picture;
    if (photo) {

      console.log("Uploading to Cloudinary...");
      const b64 = Buffer.from(photo.buffer).toString("base64");
      const dataURI = `data:${photo.mimetype};base64,${b64}`;


      console.log("Data URI:", dataURI);


      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "eventPlannerPicture",
        width: "500",
        height: "500",
        crop: "fill",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        fullName,
        phone,
        gender,
        occupation,
        address,
        city,
        state,
        district,
        representing,
        photo: picture || currentUser.photo,
      },
      { new: true }
    );

    res.status(200).json({ message: "Profile Updated", data: updatedUser });
  } catch (error) {
    next(error);
  }
};
