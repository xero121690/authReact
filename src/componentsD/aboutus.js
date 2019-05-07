import React, { Component } from 'react';


class About extends Component {
  render() {
    return(
      <div class="container-center">
        <div class="heading-title text-center h-64">
              {/* <img src height="" width="" /> thinking of placing on image on this page. Let me know what you guys think. */}
              <h2 class="text-uppercase">Our story</h2>
              <h4 class="text-uppercase">We’ve always been obsessed with making work better for people.</h4>
              <p class="p-top-30 half-txt">Back in 2018, that meant designing a simpler way to keep files in sync. Today, it means designing a more enlightened way of working—on files, projects, and more.</p>
              <p class="p-top-30 half-txt">Most “productivity tools” drain creative energy. They constantly ping, distract, and disrupt your team’s flow. And none of them connect, so you spend your days switching between apps, tracking down feedback. It’s busywork, not the meaningful stuff.&nbsp;We want to change this.</p>
              <p class="p-top-30 half-txt">So we’re building a home for all your team’s work. A better way to stay in flow and bring your team’s best ideas to life. A set of tools that maximize inspiration and minimize distraction.&nbsp;</p>
              <p class="p-top-30 half-txt">So you can focus on what matters.</p>
            </div> 
            </div>
    )
  }
}

export default About;
