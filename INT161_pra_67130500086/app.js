const express = require('express');
const app = express();
app.use(express.json());

const coursesRouter = require('./rounter/courses.js');
const studentsRouter = require('./rounter/studentRounter.js');

// assignment requirement
app.use('/67130500086/api', coursesRouter);
app.use('/67130500086/api', studentsRouter);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
