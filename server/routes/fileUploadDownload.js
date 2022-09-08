const router = require('express').Router()
const mongoose = require("mongoose");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const mongoURI = "mongodb://localhost:27017/aids_feedback_form_db";
const { File } = require('../models/fileModel')
const { BackpackFile } = require()
// connection
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Connection Error'));
let gridFSBucket;
conn.once('open', async () => {
    gridFSBucket = await new mongoose.mongo.GridFSBucket(conn.db, {bucketName: 'BackpackFiles'}); 
})
// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve) => {
        const fileInfo = {
          filename: req.body.filename,
          bucketName: 'BackpackFiles'
        };
        resolve(fileInfo);
    });
  }
});
const upload = multer({ storage : storage});

//File Upload
router.post('/', upload.any(), (req, res) => {
  new File({
    filename: req.body.filename,
    semester: req.body.semester,
    courseId: req.body.courseId,
  }).save()
  res.send("File Uploaded Successfully");
});
router.get('/', async (req, res) => {
  let contentType;
  let filename = req.query.file.toString();
  File.find({ filename: filename }).then((file) => {
    contentType = file[0].contentType;
    //setting response header
    res.set({
      "Accept-Ranges": "bytes",
      "Content-Disposition": `attachment; filename=${filename}`,
      "Content-Type": `${contentType}`
    });

    const readstream = gridFSBucket.openDownloadStreamByName(filename);
    readstream.pipe(res);
  })
})

module.exports= router