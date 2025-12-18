const Application = require("../models/application");
const Job = require("../models/jobs");

// to apply for a job
exports.applyForJob = async (req, res) => {
    try {
        const jobId = req.params.jobId;
        const userId = req.userId;

        const resume = req.file; 
        if (!resume) {
            return res.status(400).json({ message: "Resume is required to apply for a job." });
        }

        const alreadyApplied = await Application.findOne({ userId, jobId });
        if (alreadyApplied) {
            return res.status(400).json({ message: "You have already applied for this job." });
        }

        const application = await Application.create({
            userId,
            jobId,
            "resume": resume.path
        })

        res.status(201).json({ message: "Job application submitted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Error applying for job", error });
    }
}

exports.myApplications = async (req, res) => {
    try {
        const userId = req.params.userId;

        const applications = await Application.find({ userId })
            .populate('jobId', 'title company location job_type description salary')
            .sort({ appliedAt: -1 });

        res.status(200).json({ applications });
    } catch (error) {
        res.status(500).json({ message: "Error fetching applications", error });
    }   
};