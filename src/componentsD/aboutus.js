import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div className="w-full max-w-md" 
        style={{    margin: '25px auto',
              width: '50%',
              border: '3px solid green',
              padding: '10px'}} >
        <h1>About Page</h1>
        <h2>Our story</h2>
        <h4>We’ve always been obsessed with making work better for people.</h4>
        <p>Back in 2018, that meant designing a simpler way to keep files in sync. Today, it means designing a more enlightened way of working—on files, projects, and more.</p>
        <p>Most “productivity tools” drain creative energy. They constantly ping, distract, and disrupt your team’s flow. And none of them connect, so you spend your days switching between apps, tracking down feedback. It’s busywork, not the meaningful stuff.&nbsp;We want to change this.</p>
        <p>So we’re building a home for all your team’s work. A better way to stay in flow and bring your team’s best ideas to life. A set of tools that maximize inspiration and minimize distraction.&nbsp;</p>
        <p>So you can focus on what matters.&nbsp;<br></br></p>{/*everything below is strictly for content flooding*/}
      </div>
    )
  }
}

export default About;
