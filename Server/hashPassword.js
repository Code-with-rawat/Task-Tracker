const bcrypt = require("bcryptjs");

async function hashPassword() {
  const password = "himanshu"; // jo password user login put krega
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
}

hashPassword();
