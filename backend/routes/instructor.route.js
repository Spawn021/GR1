const express = require("express");
const router = express.Router();
const { Instructor } = require("../model/instructor");
// GET all instructors
router.get("/", async (req, res) => {
  const name = req.query.name || "";

  // Save the new instructor to the database
  const instructors = await Instructor.find({
    name: { $regex: new RegExp(name.trim()), $options: "i" },
  });

  res.status(200).json({ instructors });
});

router.get("/member", async (req, res) => {
  const instructors = await Instructor.find(null, {
    name: 1,
    _id: 1,
    image: 1,
  });
  res.status(200).json({ instructors });
});
// GET a single instructor by ID
router.get("/:id", async (req, res) => {
  const instructorId = req.params.id;
  // Logic to fetch an instructor by ID from the database
  // ...
  const instructor = await Instructor.findById(instructorId);
  res.json(instructor);
});

router.post("/", (req, res) => {
  // Logic to create a new instructor in the database
  // ...
  res.send("Create a new instructor");
});

module.exports = router;
