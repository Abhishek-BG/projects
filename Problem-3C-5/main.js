const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const upload = require('./fileSchema'); // File upload middleware
const File = require('./model/mongoSchema'); // File model
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/problem3c5';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// Route: Home
app.get('/', (req, res) => {
  res.render('index');
});

// Route: Upload
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { filename, path, size } = req.file; // Multer adds the file info to `req.file`
    const file = new File({ filename, path, size });
    await file.save();
    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
