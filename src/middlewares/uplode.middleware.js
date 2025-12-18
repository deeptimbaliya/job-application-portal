const multer  = require('multer')
const path = require('path');
const fs= require('node:fs');

const uploadDir = path.join("src", "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const fileFilter = (req, file, cb) => {
    const allowedTypes = /pdf|doc|docs/;

    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (extname) {
        return cb(null, true);
    } else {
        cb(new Error('Only .pdf, .doc, .docs files are allowed'));
    }
}


const upload = multer({ storage: storage, fileFilter: fileFilter })

module.exports = upload;
