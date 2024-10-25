import User from "../models/user.model.js";
import generateToken from "../config/generateToken.js";

async function registerUser(req, res) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send("All the fields are required!");
    }
    const exist = await User.findOne({ username: username });
    if (exist) {
      return res
        .status(400)
        .send("User already exists. Please try logging in!");
    }

    const user = await User.create({
      username: username,
      password: password,
    });
    if (!user) {
      return res.status(400).send("User couldn't be created");
    }
    return res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
}

async function loginUser(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      const at = generateToken(user._id);
      res.cookie("accessToken", at);
      res.json({
        _id: user._id,
        username: user.username,
        token: at,
      });
    } else {
      res.status(400).send("Invalid Username or Password.");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log(error);
  }
}

async function allUsers(req, res) {
  const keyword = req.query.search
    ? {
        $or: [
          {
            username: { $regex: req.query.search, $options: "i" },
          },
        ],
      }
    : {};

  const loggedInUserId = req.user._id.toString(); // Convert ObjectID to string

  const users = await find(keyword);
  const filteredUsers = users.filter(
    (user) => user._id.toString() !== loggedInUserId
  );

  if (!filteredUsers.length) {
    return res.status(404).send("Cannot get the users details");
  }

  res.status(201).send(filteredUsers);
}

export { registerUser, loginUser, allUsers };
