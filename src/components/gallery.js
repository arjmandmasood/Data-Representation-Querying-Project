import React from "react";
import {GalleryItem} from './galleryItem';

export class Gallery extends React.Component{

    //render method
    render(){
        //return method
        return this.props.gallery.map(
            (gallery)=>{
                return <GalleryItem gallery={gallery} key={gallery._id} ReloadData={this.props.ReloadData}></GalleryItem>
            }
        );//end return menthod
    }//end render method
}//end class