const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example Model for Projects
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  link: String,
});

const Project = mongoose.model('Project', ProjectSchema);

// Routes
app.get('/api/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
