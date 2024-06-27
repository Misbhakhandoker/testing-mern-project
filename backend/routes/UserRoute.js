const express = require("express");

const router = express.Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.phoneNumber
    ) {
      return res
        .status(400)
        .send({
          message:
            "please fill all the fields: title, email, password, phoneNumber",
        });
    }
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    };
    const user = await User.create(newUser);
    return res.status(201).send({ user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ data: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }

    return res.status(200).json({ data: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res)=> {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id)
  if(!user){
    return res.status(404).send({message: "user not found"})
  }
  return res.status(200).json({data: user})
})
router.delete("/:id", async (req, res)=> {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id)
  if(!user){
    return res.status(404).send({message: "user not found"})
  }
  return res.status(200).json({data: user})
})

module.exports = router;
