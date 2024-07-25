const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8081;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the contact.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "projects.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/resume", (req, res) => {
  res.sendFile(path.join(__dirname, "resume.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
