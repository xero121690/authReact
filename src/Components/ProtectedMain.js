import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './About';
import Header from './Header';


class App2 extends Component {
  render () {

    const { location } = this.props;
    // currentKey is used to work with the CSSTransition component so that it keeps track of changes, eseentially so that it updates
    // similar to react and using keys, so that is updates the correct component
    // we are splitting and taking the first pathname so that it doesn't re-render when the key in Topics changes 
    const currentKey = location.pathname.split('/')[1] || '/';
    console.log('App2: ', currentKey)
    const timeout = { enter: 300, exit: 200 }
    return (
      <div>
        <Header />
        <TransitionGroup component="main" className="page-main">
          {/* the timeout below defines the duration of the transition */}
          <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
            <section className="page-main-inner">
              <div className="App">
                <hr />
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  {/* <Route path='/topics' component={Topics} />
                  <Route path='/subpage' component={Subpage} /> */}
                  <Redirect to='/' />
                </Switch>
              </div>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default withRouter(App2);
