import React from 'react'
import axios from 'axios'

export class Add extends React.Component {
  //constructor
  constructor() {
    super()
    //binding all methods
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChangePic = this.onChangePic.bind(this)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangePrice = this.onChangePrice.bind(this)
    //set state empty string
    this.state = {
      pic: '',
      title: '',
      price: '',
    } //end state
  } //end constructor

  //handleSubmit method with e parameter
  handleSubmit(e) {
    e.preventDefault()
    console.log(`Button clicked 
        ${this.state.pic},
        ${this.state.title},
        ${this.state.price}`)

    const gallery = {
      pic: this.state.pic,
      title: this.state.title,
      price: this.state.price,
    }

    // .post add new record in database
    //send the data on this 'http://localhost:4000/api/gallery'
    axios.post('http://localhost:4000/api/gallery', gallery).then().catch()

    //set the state as string
    this.setState({
      pic: '',
      title: '',
      price: '',
    })
  } //end handleSubmit method

  //onChangePic method
  onChangePic(e) {
    this.setState({
      pic: e.target.value,
    })
  } //end onChangePic method

  //onChangeTitle method
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    })
  } //end onChangeTitle method

  //onChangePrice method
  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    })
  } //end onChangePrice method

  //render method
  render() {
    //return method
    return (
      <div>
        <br></br>
        <h3>Add Component!</h3>
        {/* when Submit the form call handleSubmit method  */}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className='label'>Add Image: </label>
            <input
              type="text"
              className="form-control img"
              value={this.state.pic}
              onChange={this.onChangePic}
            />
          </div>

          <div className="form-group">
            <label className='label'>Add Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>

          <div className="form-group">
            <label className='label'>Add Price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
            />
          </div>
          <input
            className="btn btn-primary add-button"
            type="submit"
            value="Add Image"
          />
        </form>
      </div>
    ) //end retuen method
  } //end render method
} //end class
