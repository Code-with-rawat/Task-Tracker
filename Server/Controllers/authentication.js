const User = require("../models/authenticatemodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// In this authenticate Controller we handles all login logics and functionality Here 


exports.login = async (req, res) => {
    const { email, password } = req.body;

  try {
    // Email check k liye 
    const user = await User.findOne({ email });
       if (!user) {
           return res.status(400).json({ message: "Invalid user Data" });
       }

    // Password check k liye 
     const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) {
            return res.status(400).json({ message: "Invalid user  Data " });
        }

    // Token generate using JWT 
    const token = jwt.sign(
        { userId: user._id },
       process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
