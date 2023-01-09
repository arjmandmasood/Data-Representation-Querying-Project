import React from "react";
import { Gallery } from "./gallery";
import axios from "axios";

export class Read extends React.Component{

    //constructor
    constructor(){
        super();
        //binding method
        this.ReloadData = this.ReloadData.bind(this);
    }//end constructor

    ReloadData(){
        axios.get('http://localhost:4000/api/gallery')
        .then((response)=>{
            //setting the state here
            this.setState({gallery:response.data})
        })//end then method

        //catch method catch the error
        .catch((error)=>{
            //console.log() shows the error
            console.log(error);
        })//end catch method
    }//end componentDidMount method
    
    //componentDidMount method
    componentDidMount() {
        axios.get('http://localhost:4000/api/gallery')
        .then((response)=>{
            //setting the state here
            this.setState({gallery:response.data})
        })//end then method

        //catch method catch the error
        .catch((error)=>{
            //console.log() shows the error
            console.log(error);
        })//end catch method
    }//end componentDidMount method

    //state
    state = {
        gallery:[ ]
    }
    
    //render method
    render(){
        //return method
        return(
            <div>
                {/* <h3>Hello from my Read component!</h3> */}
                    <Gallery gallery={this.state.gallery} ReloadData={this.ReloadData}></Gallery>
                </div>
        );//end return method
    }//end render method
}//end class