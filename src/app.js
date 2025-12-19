const express = require('express');
const cores = require('cors');

const errorhandler = require('./middlewares/error.heandler');

const authRoutes = require('./routes/auth.routes');
const jobRoutes = require('./routes/jobs.routes');
const applicationRoutes = require('./routes/application.routes');

const app = express();

// Middleware
app.use(express.json());
app.use(cores());
app.use("/uploads", express.static("./uploads"));
app.use(errorhandler);

// Routes
app.use('/', (req,res)=>{res.send("Job Application Portal API Running")});
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/application', applicationRoutes);

module.exports = app;
