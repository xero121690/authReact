import React, { Component } from 'react';
// import Dropzone from 'react-dropzone';

// const About = () => (
//   <div >
//     <h2>This is About</h2>
//   </div>
// )

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

/*   handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  } */
  
handleUploadImage(ev) {
    ev.preventDefault();


    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);


    fetch('http://ec2-54-157-46-176.compute-1.amazonaws.com:8080/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://ec2-54-157-46-176.compute-1.amazonaws.com:8080/${body.file}` });
      });
    });
	  document.getElementById("myForm").reset();
    alert("You have uploaded your file");

  }


  render() {
    return (
      <form id="myForm" onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">Upload</button>
        </div>
      </form>
    );
  }
}









// export default About;