import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto', }}>
        <Grid className="landing-grid">
        <div align="center">
            <img
              src="https://dgyqr055mfays.cloudfront.net/site/images/features/file-sharing.png"
              alt="avatar"
              className="avatar-img"
              style={{height: '250px', width: '800px'}}
              />

            <div className="banner-text" align="center">
              <h1>CAMB SHARE</h1>

            <hr/>

          <p>Share different.</p>
          <button class="bg-black hover:bg-blue-dark text-white font-bold py-3 px-4 rounded mr-4">
          Learn More
          </button>
          <button class="bg-black hover:bg-blue-dark text-white font-bold py-3 px-4 rounded mr-4" href="#">
          Login
          </button>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Landing;
