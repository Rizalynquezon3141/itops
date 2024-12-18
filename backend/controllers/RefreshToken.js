import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user[0]) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);

      const userId = user[0].id;
      const firstname = user[0].firstname;
      const lastname = user[0].firstname;
      const email = user[0].email;

      // Generate new access token
      const accessToken = jwt.sign(
        { userId, firstname, lastname, email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "4h" } // Token expires in 4 hours
      );

      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};













{/*import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user[0]) return res.sendStatus(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);

        const userId = user[0].id;
        const fullname = user[0].fullname; // Updated from 'name' to 'fullname'
        const email = user[0].email;

        const accessToken = jwt.sign(
          { userId, fullname, email }, // Updated 'name' to 'fullname' here
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};*/}
