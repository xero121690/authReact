import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ghostId from './ghostID';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const DataTopic = ({ match, location }) => {
  const timeout = { enter: 300, exit: 200 }
  const currentKey = location.pathname.split('/')[3] || '/';
  console.log('DataTopic: ', currentKey)
  return (
    <div>
      <nav>
        <ul id='DataTopic'>
        {/* Using NavLink becasue  */}
          <li><NavLink to={`${match.url}/more`}>
            More baby
          </NavLink></li>
          <li><NavLink to={`${match.url}/ghosts`}>
            ghosts
          </NavLink></li>
        </ul>
      </nav>
      <TransitionGroup component="main" className="page-main">
        {/* the timeout below defines the duration of the transition */}
        <CSSTransition key={currentKey} timeout={timeout} classNames="fadee" appear>
          <section className="page-main-inner">
            <div className="App">

              <Switch location={location}>
                <Route path={`${match.path}/:ghostId`} component={ghostId} />
                <Route exact path={match.path} render={() => (
                  <h3>choose a DataTopic</h3>
                )} />
              </Switch>

            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>





    </div>
  )
}

export default DataTopic;