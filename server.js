const express = require('express');
const path = require('path');
const app = express();
const api = require('./Develop/routes/index')

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);