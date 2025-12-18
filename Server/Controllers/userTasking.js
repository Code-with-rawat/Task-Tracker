const Task = require("../models/taskingmodel");

// In this userTasking we create, update , get and delete all tasks  and logics Here 


// Create tasking 
exports.createTasking = async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const task = new Task({title, description,status, userId: req.userId});

    await task.save();
    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ message: "Task fails" });
  }
};

// Get user tasking
exports.getMyTasking = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch task" });
  }
};

// Update tasking
exports.updateTaskingStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { status },{ new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);

  } catch (error) {
    res.status(500).json({ message: "Update fails" });
  }
};

// Delete Tasking
exports.deleteTasking = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task delete success" });
  } catch (error) {
    res.status(500).json({ message: "Delete fails" });
  }
};
