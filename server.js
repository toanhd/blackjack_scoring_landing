const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8081;

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the contact.html file
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/projects", (req, res) => {
  res.render("projects");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/resume", (req, res) => {
  res.render("resume");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
