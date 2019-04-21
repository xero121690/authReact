import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';



class Login extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}> {/*Gotta get this column sizing down. */}
            <h2>CAMBshare Inc.</h2>
            <img
              src="https://cdn.lynda.com/course/738522/738522-636646699262549764-16x9.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Login here to access your account.</p>

          </Cell>
          <Cell col={3}>
            <h2>Login</h2>
            <hr/>

            <div className="contact-list">
            <div class="w-full max-w-xs py-3">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                </div>
                <div class="mb-6">
                  <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
                  <p class="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                  <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                  </button>
                  <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <p class="text-center text-grey text-xs">
                ©2018 Acme Corp. All rights reserved.
              </p>
            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Login;
