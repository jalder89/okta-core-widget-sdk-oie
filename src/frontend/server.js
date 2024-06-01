import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import "dotenv/config";

// Declarations and Initializations
const app = new express();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Express routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/pages/index/index.html'))
});

app.listen(Number(process.env.PORT || 8080));
console.log(`App listening on ${process.env.PORT || 8080}`);
