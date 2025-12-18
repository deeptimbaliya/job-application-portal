const express = require('express');
const router = express.Router();

const uplodad = require('../middlewares/uplode.middleware');
const auth = require("../middlewares/auth.middleware");

const { myApplications, applyForJob } = require('../controllers/application.conteroller');

router.post('/apply/:jobId',
    auth,
    uplodad.single('resume'),
    applyForJob);

router.get('/myapplications/:userId',
    auth,
    myApplications);


module.exports = router;