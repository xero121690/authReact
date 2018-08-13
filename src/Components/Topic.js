import React from 'react'
import { Route } from 'react-router-dom'
import DataTopic from './DataTopic'
const Topic = ({ match, location }) => {
  console.log('match.path: ', match.path)
  console.log('match.url: ', match.url)
  const urlName = location.pathname.split('/')[2];

  // checking if the urlName is equal to props-vs-state because i am trying to render the DataTopic component
  // when props-vs-state is clicked. maybe a better way?
  // reason for doing is becasue i want to use a Switch component that keeps track of history on Topics but it only chooses one Route
  if (urlName === 'props-vs-state'){

    return(
      <div>
      <h3><u>{match.params.topicId}</u></h3>
      {/* this means that when urlName is matched, Route automatically renders DataTopic component automatically */}
      <Route component={DataTopic}/>
    </div>
    )
  }
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
}

export default Topic;