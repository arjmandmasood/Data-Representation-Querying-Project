const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Serve the static files from the React app 
// parse application/json
app.use(bodyParser.json());
const path = require('path'); 
app.use(express.static(path.join(__dirname, '../build'))); 
app.use('/static', express.static(path.join(__dirname, 'build//static')));


const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(error => console.log(error));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.eml4wfj.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// gallery schema which has pic, title and price
const gallerySchema = new mongoose.Schema({
    pic: String,
    title: String,
    price : Number
  });

//compiling our schema into a Model
const galleryModel = mongoose.model('gallery', gallerySchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//get method (response) return the "hello world"
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/gallery',(req, res)=>{
    console.log(req.body);
    // add new document for model
    galleryModel.create({
        pic:req.body.pic,
        title:req.body.title,
        price:req.body.price
    })
    //send reponse message 'Data Added' or show message 'Data added'
    res.send('Data Added');
})

//in get method setting the route '/api/gallery'
app.get('/api/gallery', (req, res) => {
    //gallery array
    // const gallery = [
    //     {
    //         "pic": "https://github.com/arjmandmasood/images/blob/main/img-1.jpg?raw=true", 
    //         "title": "MEAP", 
    //         "price": 5
    //     },
    //     { 
    //         "pic": "https://github.com/arjmandmasood/images/blob/main/img-2.jpg?raw=true", 
    //         "title": "MEAP", 
    //         "price": 5 
    //     },
    //     { 
    //         "pic": "https://github.com/arjmandmasood/images/blob/main/img-3.jpg?raw=true", 
    //         "title": "MEAP", 
    //         "price": 5 
    //     } 
    // ]

    // find the error or data from galleryModel
    galleryModel.find((error,data)=>{
        console.log(data);
        res.json(data);
    })  
})

//get data entering specific id in url
app.get('/api/gallery/:id',(req,res)=>{
    console.log(req.params.id);
    //find the data with id in galleryModel
    galleryModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    })
})

// in this we find the record by id and update it
app.put('/api/gallery/:id',(req,res)=>{
    console.log("Update " +req.params.id);
    //find the data with id and update in galleryModel
    galleryModel.findByIdAndUpdate(req.params.id,req.body,{new: true},(error,data)=>{
        res.json(data);
})
})

// in this we delete the record by id
app.delete('/api/gallery/:id',(req,res)=>{
    console.log("Deleting: " +req.params.id);
     //find the data with id and delete from galleryModel
     galleryModel.deleteOne({_id:req.params.id}, (error,data)=>{
        res.json(data);
})
})


// Handles any requests that don't match the ones above 
app.get('*', (req,res) =>{ 
    res.sendFile(path.join(__dirname+'/../build/index.html }); '));
});

//app.listen method return the written message with the port number
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})