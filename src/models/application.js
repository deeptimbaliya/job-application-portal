const mongoose = require('mongoose');

const applicationsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true
        },
        jobId: {
            type: mongoose.Schema.ObjectId,
            ref: "Jobs",
            required: true
        },
        resume: {
            type: String,
            required: true
        },
        appliedAt: {
            type: Date,
            default: Date.now
        }

    },
    { timestamps: true }
)

module.exports = mongoose.model('Application', applicationsSchema);