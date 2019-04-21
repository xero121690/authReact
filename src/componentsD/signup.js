import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class signup extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
        <div align="center">
            <h2>CAMBshare Inc.</h2>
            <img
              src="https://cdn.lynda.com/course/738522/738522-636646699262549764-16x9.jpg"
              alt="avatar"
              style={{height: '250px', width: '800px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Signup with CAMBshare now. You will be able to securely store and share your files.</p>

          </div>
          <div align="center">
            <hr/>
            <h2>Sign Up</h2>
            <hr/>

            <div className="contact-list">
            <form class="w-full max-w-xs">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4 py-6" for="inline-full-name">
                    Full Name
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-8 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="text" value="Jane Doe"></input>
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
                    Password
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-username" type="password" placeholder="******************"></input>
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <label class="md:w-2/3 block text-grey font-bold">
                  <input class="mr-2 leading-tight" type="checkbox"></input>
                  <span class="text-sm">
                    Send me your newsletter!
                  </span>
                </label>
              </div>
              
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                  <button class="shadow bg-purple hover:bg-purple-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Sign Up
                  </button>
                </div>

              </div>
            </form>
            </div>
            </div>
        </Grid>
      </div>
    )
  }
}

export default signup;
