import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import "dotenv/config";

// Declarations and Initializations
const app = new express();
const PORT = process.env.PORT || 8080;

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Express routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/pages/index.html'))
});

app.listen(Number(PORT));
console.log(`App listening on ${PORT}`);
