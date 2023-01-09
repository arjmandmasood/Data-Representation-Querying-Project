import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";


export class GalleryItem extends React.Component {

    //constructor
    constructor(){
        super();
        //binding methods
        this.DeleteImage = this.DeleteImage.bind(this);
    }//end constructor

    //DeleteImage event
    DeleteImage(e){
        e.preventDefault();
        // .delete delete the data or record in the database
        axios.delete('http://localhost:4000/api/gallery/' + this.props.gallery._id)
        //Reload data
        .then(()=>{this.props.ReloadData()})
        .catch();
    }//End DeleteImage event

    render() {
        return (
            // <div className="container">
            <div className="card">
                <Card>
            <Card.Header><img src={this.props.gallery.pic}></img></Card.Header>
                    <Card.Body>
           <blockquote className="blockquote mb-0">        
                {this.props.gallery.title}
            <p>€
                {this.props.gallery.price}
                    </p>
                        </blockquote>
                    </Card.Body>
                    {/* <Button>Edit</Button> */}
                    <Link to = {"/update/"+this.props.gallery._id} className = "btn btn-primary update-button">Update</Link>
                    <Button variant="danger" className="delete-button" onClick={this.DeleteImage}>Delete</Button>
                </Card>
            </div>
            // </div>
        );
    }
}