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

app.get("/privacy", (req, res) => {
  res.render("privacy");
});

app.get("/terms", (req, res) => {
  res.render("terms");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/app-ads.txt", (req, res) => {
  res.render("app-ads.txt");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
