const express = require('express');
const path = require('path');

const {requestLogger} = require('./middleware/logger')
const charRoutes = require('./routes/charRoutes');
const {lostnFound} = require('./middleware/notFound');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);


//ret sikker på '..'
app.use(express.static(path.join(__dirname,'..', 'frontend')));
app.use(charRoutes);

app.use(lostnFound);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});