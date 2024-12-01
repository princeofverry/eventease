const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const formController = require('../controllers/formController');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Configure multer upload
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb('Error: Only jpeg, jpg, png, and pdf files are allowed');
    }
  }
});

// Submit form route with multiple file uploads
router.post('/submit', 
  upload.fields([
    { name: 'ktpNpwp', maxCount: 1 },
    { name: 'fotoUsaha', maxCount: 1 }
  ]), 
  formController.submitForm
);

router.get('/submissions', formController.getSubmissions);
router.get('/verified-businesses', formController.getVerifiedBusinesses);
router.post('/verify/:id', formController.verifySubmission);

module.exports = router;