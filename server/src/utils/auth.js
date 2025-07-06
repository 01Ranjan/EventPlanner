import jwt from "jsonwebtoken";

const genToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("IDCard", token, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    Secure: "false",
    sameSite: "lax",
  });
};


export default genToken;