const Job = require("../models/jobs");

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json({ jobs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.seedJobs = async (req, res) => {
    try {

        const jobs = [
            {
                title: "Node.js Developer",
                salary: "30000-40000",
                company: "Tech Solutions",
                location: "Remote",
                job_type: "in person",
                description: "Build REST APIs using Node.js and Express."
            },
            {
                title: "Frontend Developer",
                salary: "35000-45000",
                company: "Pixel Dynamics",
                location: "Mumbai",
                job_type: "hybrid",
                description: "Develop user interfaces using React.js and modern CSS frameworks."
            },
            {
                title: "Backend Engineer",
                salary: "40000-55000",
                company: "CodeCrafters Inc.",
                location: "Bangalore",
                job_type: "remote",
                description: "Design and maintain server-side logic using Django and PostgreSQL."
            },
            {
                title: "Android Developer",
                salary: "30000-50000",
                company: "AppVerse Labs",
                location: "Pune",
                job_type: "in person",
                description: "Develop and deploy mobile applications using Kotlin and Jetpack Compose."
            },
            {
                title: "Full Stack Developer",
                salary: "45000-60000",
                company: "NextGen Tech",
                location: "Hyderabad",
                job_type: "remote",
                description: "Work on both frontend and backend using MERN stack technologies."
            },
            {
                title: "Data Analyst",
                salary: "35000-50000",
                company: "Insight Analytics",
                location: "Delhi",
                job_type: "hybrid",
                description: "Analyze datasets and create visualizations using Python and Power BI."
            },
            {
                title: "Machine Learning Engineer",
                salary: "50000-70000",
                company: "AI Nexus",
                location: "Chennai",
                job_type: "remote",
                description: "Develop and optimize ML models for predictive analytics tasks."
            },
            {
                title: "DevOps Engineer",
                salary: "45000-65000",
                company: "CloudWorks",
                location: "Remote",
                job_type: "in person",
                description: "Manage CI/CD pipelines and automate infrastructure deployment."
            },
            {
                title: "Frontend Intern",
                salary: "15000-20000",
                company: "BrightApps",
                location: "Ahmedabad",
                job_type: "in person",
                description: "Assist with UI development tasks in React and learn best practices."
            },
            {
                title: "Software Engineer",
                salary: "40000-55000",
                company: "Innovatech",
                location: "Remote",
                job_type: "remote",
                description: "Contribute to full stack product development with Agile methods."
            },
            {
                title: "Python Developer",
                salary: "30000-45000",
                company: "DataSoft",
                location: "Noida",
                job_type: "hybrid",
                description: "Write maintainable code and build backend APIs using Flask."
            },
            {
                title: "UI/UX Designer",
                salary: "35000-50000",
                company: "Designify",
                location: "Kolkata",
                job_type: "remote",
                description: "Design seamless digital experiences using Figma and Adobe XD."
            },
            {
                title: "Game Developer",
                salary: "40000-55000",
                company: "PlayCode Studios",
                location: "Mumbai",
                job_type: "in person",
                description: "Develop 2D and 3D games using Unity and C#."
            },
            {
                title: "Product Manager",
                salary: "60000-80000",
                company: "Visionary Labs",
                location: "Remote",
                job_type: "remote",
                description: "Oversee software product lifecycle and coordinate cross-functional teams."
            },
            {
                title: "QA Engineer",
                salary: "30000-40000",
                company: "BugFree Systems",
                location: "Chandigarh",
                job_type: "hybrid",
                description: "Test web applications manually and automate with Selenium."
            },
            {
                title: "React Native Developer",
                salary: "40000-55000",
                company: "Appify Tech",
                location: "Pune",
                job_type: "remote",
                description: "Create cross-platform mobile apps using React Native."
            },
            {
                title: "Cybersecurity Analyst",
                salary: "45000-60000",
                company: "SecureNet",
                location: "Delhi",
                job_type: "hybrid",
                description: "Monitor networks and mitigate security vulnerabilities."
            },
            {
                title: "AI Research Intern",
                salary: "20000-30000",
                company: "MindAI Labs",
                location: "Bangalore",
                job_type: "in person",
                description: "Research and implement deep learning models using PyTorch."
            },
            {
                title: "Database Administrator",
                salary: "40000-55000",
                company: "DataCore Systems",
                location: "Hyderabad",
                job_type: "remote",
                description: "Maintain databases and ensure data security and performance."
            },
            {
                title: "Cloud Engineer",
                salary: "50000-70000",
                company: "SkyNet Technologies",
                location: "Remote",
                job_type: "remote",
                description: "Deploy scalable cloud solutions using AWS and Kubernetes."
            }
        ];

        await Job.insertMany(jobs);
        res.json({ message: "Sample jobs inserted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};