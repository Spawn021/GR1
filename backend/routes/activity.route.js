const express = require("express");
const router = express.Router();
const { Activity } = require("../model/activity");

// POST: Create a new activity
router.post("/", async (req, res) => {
  try {
    const { title, image, date } = req.body;

    if (!title || !image || !date) {
      return res.status(400).json({ message: "Title, image, and date are required" });
    }

    const newActivity = new Activity({ title, image, date });
    const savedActivity = await newActivity.save();

    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(500).json({ message: "Error creating the activity", error: error.message });
  }
});

// GET: Retrieve all activities
router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities", error: error.message });
  }
});

// GET: Retrieve a single activity by ID
router.get("/:id", async (req, res) => {
  try {
    const activityId = req.params.id;
    const activity = await Activity.findById(activityId);

    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the activity", error: error.message });
  }
});

// PUT: Update an activity by ID
router.post("/:id", async (req, res) => {
  try {
    const activityId = req.params.id;
    const updateData = req.body;

    const updatedActivity = await Activity.findByIdAndUpdate(activityId, updateData, { new: true });

    if (!updatedActivity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.status(200).json(updatedActivity);
  } catch (error) {
    res.status(500).json({ message: "Error updating the activity", error: error.message });
  }
});

// DELETE: Delete an activity by ID
router.delete("/:id", async (req, res) => {
  try {
    const activityId = req.params.id;
    const deletedActivity = await Activity.findByIdAndDelete(activityId);

    if (!deletedActivity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    res.status(200).json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting the activity", error: error.message });
  }
});

module.exports = router;
