import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import ProtectedMain from './ProtectedMain';
import AuthService from './AuthService';
import LandingPage from '../componentsD/landingpage'
import About from '../componentsD/aboutus'
import Contact from '../componentsD/contact';
import Team from '../componentsD/team';
import signup from '../componentsD/signup';
import Navigation from '../componentsD/navigation';
// import Header from './Header';


const fakeAuth = {
  isAuthenticated: false,
  authenticate (cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout (cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

// const Public = () => <h3>Public</h3>

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      email: '',
      password: ''
    }

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.Auth = new AuthService();


  }

  // notes did this on 3/11/2019 
  // when browser closes, it deletes the key from user

  // componentDidMount() {
  //   window.addEventListener("beforeunload", localStorage.removeItem('id_token'))
  // }

  // this was the window closing and opening fix
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  //   window.removeEventListener('beforeunload', localStorage.removeItem('id_token'))
  // }



  change (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit (e) {
    // We don't want to reload the page on submit, so this prevents it from doing so.
    e.preventDefault();

    // this is using the AuthService component and the login function from authservice ******************************
    this.Auth.login(this.state.email, this.state.password)

    if (this.Auth.loggedIn) {
      console.log('logged in')
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }
  }

  render () {

    var divStyle = {
      margin: '0 auto',
      width: '400px'
    }

    var labelStyle = 'block text-grey-darker text-sm font-bold mb-2';
    var labelInput = 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'



    console.log('consolelog redirecttoreferrer: ', this.state.redirectToReferrer)
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    console.log('login rendering...')
    console.log('redirectToReferrer:   ', redirectToReferrer)


    if (this.Auth.loggedIn()) {
      console.log('location.state: ', this.props.location.state)
      console.log('from: ', from)
      return <Redirect to={from} />
    } else {
      return (
        <div style={divStyle}>
          <h3 className="text-center">You must log in to view this page.</h3>
          {/* <button onClick={this.login}>Log in</button> */}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => this.submit(e)}>
            <div className="mb-4">
              <label className={labelStyle} >Email</label>
              <input className={labelInput} id="username" type="text" placeholder="Username" name='email' onChange={e => this.change(e)} value={this.state.email} />
            </div>
            <div className="mb-6">
              <label className={labelStyle} >Password</label>
              <input className={labelInput} id="password" type="password" placeholder="******************" name='password' onChange={e => this.change(e)} value={this.state.password} />
            </div>
            <div className="text-right">
            <button type='submit' className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full">Login</button>
            </div>
            
          </form>
        </div>
      )

    }
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = new AuthService('http://ec2-3-213-158-4.compute-1.amazonaws.com:8080');
  return (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated && Auth.loggedIn()
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  )
}

// trying to work out the log out button to remove the jwt, small steps
// before making logout make sure to create the login part such as this.auth.login(email, password)
const AuthButton = withRouter((props) => {
  // uses the AuthService and sends in the url for the server
  const Auth = new AuthService('http://ec2-3-213-158-4.compute-1.amazonaws.com:8080');
  return (
    fakeAuth.isAuthenticated && Auth.loggedIn() ? (
      <div>
        <p className="text-right">
          <button className="bg-black hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full" onClick={() => {
            Auth.logout()
            fakeAuth.signout(() => props.history.push('/'))
            console.log('AuthButton: ', props)
          }}>Sign out</button>
        </p>
      </div>

    ) : (
        <p className="text-center" ></p>
      )
  )
})






class App extends Component {


  componentWillMount () {
    const Auth = new AuthService('http://ec2-3-213-158-4.compute-1.amazonaws.com:8080');
    console.log(Auth.loggedIn)
    if (!Auth.loggedIn()) {
      this.props.history.replace('/login')
    } else {
      try {
        // taking from, from this.props.location.state
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        // can probably make this authentication better (fix**)
        // when user clicks on reload/refresh we want to have user still loggedin and want to redirect them to the same webpage they were on
        fakeAuth.authenticate(() => {
          this.setState(() => ({
            redirectToReferrer: true
          }))
        })
        setTimeout(() => {
          console.log('setTimeout: ', this.state.redirectToReferrer)
        }, 3000);
        return <Redirect to={from.pathname} />
      }
      catch (err) {
        Auth.logout()
        this.props.history.replace('/login')
      }
    }
  }

  render () {

    const authButtonPass = <AuthButton/>
    const { location } = this.props;
    // currentKey is used to work with the CSSTransition component so that it keeps track of changes, eseentially so that it updates
    // similar to react and using keys, so that is updates the correct component
    // we are splitting and taking the first pathname so that it doesn't re-render when the key in Topics changes 
    const currentKey = location.pathname.split('/')[1] || '/';
    console.log('App: ', currentKey)
    return (
      <div>
        <header>
          
         
           <Navigation authButton = {authButtonPass}/> {/*Made a navigation component to clean up in here a bit -Deon */}
        </header>
        <Switch location={location}>
          <Route path="/public" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/aboutus" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/team" component={Team} />
          <Route path="/signup" component={signup} />
          {/* PrivateRoute is used because it checks to see if user has been authorized
          in this instance, the user is not authorized by default. 
          However, once user clicks login, a return statement is used and Redirects the user to '/'.
          This causes the component to fire once again. Once fired, it checks if user is authorized.
          If true, it renders the ProtectedMain component */}
          <PrivateRoute path='/' component={ProtectedMain} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
