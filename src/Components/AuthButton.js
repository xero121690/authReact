import React from 'react'
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  Link
} from 'react-router-dom';

const AuthButton = withRouter((props) => {
  // uses the AuthService and sends in the url for the server
  const Auth = new AuthService('http://ec2-3-213-158-4.compute-1.amazonaws.com:8080');
  return (
    fakeAuth.isAuthenticated && Auth.loggedIn() ? (
      <div>
        <p className="text-center">
          Welcome!
        </p>
        <p className="text-right">
          <button className="bg-black hover:bg-blue-dark text-white font-bold rounded-full" onClick={() => {
            Auth.logout()
            fakeAuth.signout(() => props.history.push('/'))
            console.log('AuthButton: ', props)
          }}>Sigt</button>
          <br />
        </p>
      </div>
    ) : (
        <p className="text-center" >You are not logged in!</p>
      )
  )
})

export default AuthButton;