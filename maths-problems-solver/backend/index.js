const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('public')));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads') // Destination folder for the uploaded files
    },
    filename: function (req, file, cb) {
        // Generate a unique filename by adding a timestamp to the original name
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
});


const upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), async (req, res) => {
    // The uploaded file can be accessed through req.file
    // You can handle the uploaded file here (e.g., save it to a database or perform other operations)
    console.log(req.file, "hiiii");
    // const imageUrl = `https://8134-112-196-1-222.ngrok-free.app/uploads/${req.file.originalname}`
    const imageUrl = `https://d616-2401-4900-8843-e091-65be-8a8e-4693-af7d.ngrok-free.app/uploads/${req.file.originalname}`
    
    console.log("imageUrl  imageUrl",imageUrl);
   
   
    const options = {
        method: 'POST',
        url: 'https://mathocr.p.rapidapi.com/cosmos',
        headers: {
            'content-type': 'application/json',
            Authorization: process.env.AUTHORIZATION,
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        },
        data: {
            url: imageUrl
        }
    };
    

    
    const response = await axios.request(options);
    console.log("in backend ======>", response.data.result.url[0]);
    console.log("response",response,"<<<<<<<<<<<<>>>>>>>>>>>>>>>>>><>")
    res.send({
        text: response.data.result.url[0].OCR
    });
});


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})
