import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Update(props) {
// The useParams hook returns an object of key/value pairs of
// the dynamic params from the current URL that were matched by
//the <Route path>.
let { id } = useParams();
// update arrays using the React useState()
// and without the Array object's push() method
const [pic, setPic] = useState("");
const [title, setTitle] = useState("");
const [price, setPrice] = useState();
// useNavigate return a function that we can use to navigate
const navigate = useNavigate();
//useEffect Hook is similar componentDidMount
useEffect(() => {
//axios is a promised based web client
//make a HTTP Request with GET method and pass as part of the url.
// .get get the data or record from the database
axios.get('http://localhost:4000/api/gallery/' + id)
.then((response) => {
// Assign Response data to the arrays using useState.
setPic(response.data.pic);
setTitle(response.data.title);
setPrice(response.data.price);
})
.catch(function (error) {
console.log(error);
})
}, []);

// in handleSubmit event assigning values
const handleSubmit = (event) => {
event.preventDefault();
const updategallery = {
id: id,
pic: pic,
title: title,
price: price
};

// .put is HTTP req. it goes to server and server send it to the database
// .put overwrite the data or record in the database
axios.put('http://localhost:4000/api/gallery/' + id, updategallery)
.then((res) => {
console.log(res.data);
navigate('/read');
});
}
return (
<div>
<br></br>
        <h3>Update Component!</h3>
{/* form get the value for edit/update with onSubmit method */}
<form onSubmit={handleSubmit}>
<div className="form-group">
<label className='label'>Update Image: </label>
<input type="text"
className="form-control"
//getting original value here from the database and show here
value={pic}
//setting new value here using onChange
onChange={(e) => setPic(e.target.value)}
/>
</div>
<div className="form-group">
<label className='label'>Update Image Title: </label>
<input type="text"
className="form-control"
//getting original value here from the database and show here
value={title}
//setting new value here using onChange
onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div className="form-group">
<label className='label'>Update Image Price: </label>
<input type="number"
className="form-control"
//getting original value here from the database and show here
value={price}
//setting new value here using onChange
onChange={(e) => setPrice(e.target.value)}
/>
</div>
<div className="form-group">
<input type="submit" value="Update Image" className="btn btn-primary update"></input></div>
</form>
</div>
);
}