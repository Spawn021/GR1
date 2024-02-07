const express = require("express");
const router = express.Router();
const { Student } = require("../model/student");

// POST: Create a new student
router.post("/", async (req, res) => {
  try {
    const { name, image } = req.body;

    if (!name || !image) {
      return res.status(400).json({ message: "Name and image are required" });
    }

    const newStudent = new Student({ name, image });
    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(500).json({ message: "Error creating the student", error: error.message });
  }
});

// GET: Retrieve all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error: error.message });
  }
});

// GET: Retrieve a single student by ID
router.get("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the student", error: error.message });
  }
});

// PUT: Update a student by ID
router.post("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateData = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(studentId, updateData, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ message: "Error updating the student", error: error.message });
  }
});

// DELETE: Delete a student by ID
router.delete("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting the student", error: error.message });
  }
});

module.exports = router;