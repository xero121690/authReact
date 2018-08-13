import decode from 'jwt-decode';
export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:8080' // API server domain
    // react binding stuff
    this.fetch = this.fetch.bind(this) 
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(email, password) {
    // get token from api server using the fetch API
    // passes the url 'http://localhost:8080/Login' as well as the JSON 
    // ex. to the fecth function we created, fetch(url, json)
    return this.fetch(`${this.domain}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      // this is response from server 
      // do not need to return a promise because all i want is a to setToken here
      this.setToken(res.token);
      // return Promise.resolve(res);
    })
  }

  loggedIn() {
    // checks if there is a saved token and it's still valid
    const token = this.getToken() // getting token from localstorage
    return !!token && !this.isTokenExpired(token) //handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) { //checking if token is expired
        return true;
      } else {
        return false;
      }
    }
    catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    //saves user token to localStorage
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // retrieves the user token from localstorage
    return localStorage.getItem('id_token')
  }
  logout() {
    // clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
  }

  getProfile() {
    // using jwt-decode npm package to decode the token
    return decode(this.getToken())
  }

  fetch(url, options) {
    // performs apii calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    // Setting Authorization header
    // Authorization Bearer xxx.xxx.xxx
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
    // after performing fetch,  we checkStatus of the response and make sure it is safe to proceed to be sent to server
      .then(this._checkStatus)
      .then(response => {
        console.log('response AuthService, ', response)
        // note: response.json() a func that waits until all data is received and then places it (parses it) in JSON format
        return response.json()})
  }

  _checkStatus(response) {
    console.log('_checkStatus', response)
    // raises an error in case JSON response status is not a success
    if (response.status >= 200 && response.status < 300) { // success status lies between 200 to 300
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}