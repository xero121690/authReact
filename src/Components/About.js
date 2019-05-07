import React, { Component } from 'react';

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      filename: 'test'
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }


  // upload feature
  // handleUploadImage(ev) {
  //     ev.preventDefault();


  //     const data = new FormData();
  //     data.append('file', this.uploadInput.files[0]);
  //     data.append('filename', this.fileName.value);


  //     fetch('http://ec2-54-157-46-176.compute-1.amazonaws.com:8080/upload', {
  //       method: 'POST',
  //       body: data,
  //     }).then((response) => {
  //       response.json().then((body) => {
  //         this.setState({ imageURL: `http://ec2-54-157-46-176.compute-1.amazonaws.com:8080/${body.file}` });
  //       });
  //     });
  // 	  document.getElementById("myForm").reset();
  //     alert("You have uploaded your file");

  //   }

  handleUploadImage (ev) {
    ev.preventDefault();
    var file = this.uploadInput.files[0];
    console.log(file);
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
        imageURL: [reader.result]
      })
    }.bind(this);
    console.log(url);
  }


  render () {

    // const imgstyle = {
    //   width: '100',
    //   height: '100'
    // }
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <form id="myForm" onSubmit={this.handleUploadImage} >
            <div >
              <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
            </div>
            <div >
              <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
            </div>
            <br />
            <div >
              <button className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">Upload</button>
            </div>
          </form>
          <br />
          {this.state.imageURL ? (
            <div style={{ height: 550, width: 450 }}>
              <div>
                <img src={this.state.imageURL} alt="whatever user uploaded" />
                <div>
                  <a href={this.state.imageURL} download> <br /> <button className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">Download</button></a>
                </div>
              </div>
            </div>
          ) : (
              <div></div>
            )
          }
        </div>
      </div>
    );
  }
}

/*
{this.state.imageURL && [...this.state.imageURL].map((file)=> (
  <div>{this.state.imageURL}</div>
))}
*/





// export default About;