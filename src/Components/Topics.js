import React from 'react';
import Topic from './Topic';
import { Route, Switch, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Topics extends React.Component {
  render () {
    const timeout = { enter: 300, exit: 200 }
    // receiving props from parent component App
    const { match, location } = this.props;
    const topics = [{ name: 'Rendering', id: 'rendering' }, { name: 'Components', id: 'components' }, { name: 'Props-vs-State', id: 'props-vs-state' }]
    // we are splitting and taking the second pathname so that it re-renders only Topics component
    const currentKey = location.pathname.split('/')[2] || '/';
    console.log('Topics: ', currentKey);
    return (
      <div>
        <h2><u>Topics</u></h2>
        <header >
          <nav>
            <ul>
              {topics.map(({ name, id }) => (
                <li key={id} id='topics'>
                  <NavLink to={`${match.url}/${id}`}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div >
          <TransitionGroup component="main" className="page-main">
            {/* the timeout below defines the duration of the transition */}
            <CSSTransition key={currentKey} timeout={timeout} classNames="fadee" appear>
              <section className="page-main-inner">
                <div className="App">
                  <Switch location={location}>
                    <Route path={`${match.path}/:topicId`} component={Topic} />
                    {/* <Route path={`${match.path}/props-vs-state`} component={DataTopic} /> */}
                    <Route exact path={match.path} render={() => (
                      <h3>choose a topic</h3>
                    )} />
                  </Switch>
                </div>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default Topics;