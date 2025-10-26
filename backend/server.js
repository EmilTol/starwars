const express = require('express');
const path = require('path');
const charRoutes = require('./routes/charRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//ret sikker på '..'
app.use(express.static(path.join(__dirname,'..', 'frontend')));
app.use(charRoutes);

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});