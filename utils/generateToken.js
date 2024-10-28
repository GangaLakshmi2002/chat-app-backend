import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    console.log("secert", process.env.JWT_SECRET)
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
    console.log("token", token)
    res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndSetCookie;