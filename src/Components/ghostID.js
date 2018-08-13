import React from 'react'


const ghostId = ({ match }) => {
  const ghostId = match.params.ghostId;
  const urlGhostId = match.url
  // in this case i am testing whether a url matches and thus return with specific data 
  if (urlGhostId === '/topics/props-v-state/more') {
    return (
      <div>
        
        <h3>this is More</h3>
      </div>
    )
  } else {
    return (
      <div>
        
        <h3>{ghostId}</h3>
      </div>
    )
  }
}

export default ghostId;