import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

const seedAdmin = async () => {
  await connectDB();

  const adminPassword = await bcrypt.hash("Admin@123", 10);
  const AdminUser = {
    fullName: "Admin User",
    email: "admin@gmail.com",
    phone: "9956859297",
    password: adminPassword,
    photo: "https://placehold.co/600x400?text=A",
    gender: "male",
    representing: "Bride",
    occupation: " student",
    address: "163 shyam nagar",
    city: "bhopal",
    district: "bhopal",
    state: "Madhya Pradesh",
    role: "Admin",
    status: "Active",
  };

  const existingAdmin = await User.findOne({ role: "Admin" });
  let admin;
  if (existingAdmin) {
    admin = await User.findByIdAndUpdate(existingAdmin._id, AdminUser, {
      new: true,
    });
    console.log("Admin user update successfully", admin.email);
  } else {
    admin = await User.create(AdminUser);
    console.log("Admin User created successfully", admin.email);
  }
  process.exit(1);
};

seedAdmin();