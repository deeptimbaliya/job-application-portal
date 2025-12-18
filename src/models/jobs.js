const core = require('cors');
const mongoose = require('mongoose');

const jobs = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    job_type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

exports = module.exports = mongoose.model('Jobs', jobs);