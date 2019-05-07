import React, { Component } from 'react';
import Misael from './misel.png'
import Deon from './1XrwZS0R.jpg'
import Carlos from './carlos.jpg'
import Amir from './Mesbahi-1.jpg'
import Brandon from './brandon.jpg'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    render () {
        return (
            <section class="pin bg-white">
                <div>
                    <div class="heading-title text-center h-64 shadow-lg">
                        <h3 class="text-uppercase">Our Team </h3>
                        <p class="p-top-30 half-txt">We’re here to unleash the world’s creative energy by designing a more enlightened way of working.</p>
                    </div>
                    <div class="inline-flex bg-grey-lighter">
                        <div class="container:centered sm:block md:block xl:flex mb-4 bg-grey-lightest shadow-lg px-4 py-2 m-2"> {/*this is where the white frame begins*/} {/*sm:block, md:block etc, are just */}
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-5 "> {/*sm:block = when the screen on a mobile device, the cards will stack a certain way. */}
                                <div class="team-member">
                                    <div class="team-img">
                                        <img src={Misael} alt="team member" class="img-responsive" />
                                    </div>
                                    <div class="team-hover">
                                        <div class="desk">
                                            <h4>Hi!</h4>
                                            <p>Misael's purpose is to work with React and Node.js back end server development to make sure that web page and back end are both communicating correctly. In addition resolve issues relating to CORS.</p>
                                        </div>
                                        <div class="s-link">
                                            <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
                                            <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
                                            <a href="www.google.com"><i class="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-title">
                                    <h5>Misael Vargas</h5>
                                    <span>Front End/ Back End Development</span>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-5">
                                <div class="team-member">
                                    <div class="team-img">
                                        <img src={Carlos} alt="team member" class="img-responsive" />
                                    </div>
                                    <div class="team-hover">
                                        <div class="desk">
                                            <h4>Hello World</h4>
                                            <p>My primary role was to set up the database for the CAMBshare service with an emphasis on security policies to be implemented in the database.</p>
                                        </div>
                                        <div class="s-link">
                                            <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
                                            <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
                                            <a href="www.google.com"><i class="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-title">
                                    <h5>Carlos Orozco</h5>
                                    <span>Database Administrator</span>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-5">
                                <div class="team-member">
                                    <div class="team-img">
                                        <img src={Amir} alt="team member" class="img-responsive" />
                                    </div>
                                    <div class="team-hover">
                                        <div class="desk">
                                            <h4>I love to build</h4>
                                            <p>I designs and implements solutions for the website. He is responsible for the availability and reliability of the website.</p>
                                        </div>
                                        <div class="s-link">
                                            <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
                                            <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
                                            <a href="www.google.com"><i class="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-title">
                                    <h5>Amir Mesbahi</h5>
                                    <span>Architect</span>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-5">
                                <div class="team-member">
                                    <div class="team-img">
                                        <img src={Brandon} alt="team member" class="img-responsive" />
                                    </div>
                                    <div class="team-hover">
                                        <div class="desk">
                                            <h4>I love to design</h4>
                                            <p>Brandon's main purpose is focused on the implimitation of the database and connection with the server.</p>
                                        </div>
                                        <div class="s-link">
                                            <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
                                            <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
                                            <a href="www.google.com"><i class="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-title">
                                    <h5>Brandon Rodriguez</h5>
                                    <span>Database Administrator</span>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-5 ">
                                <div class="team-member">
                                    <div class="team-img">
                                        <img src={Deon} alt="team member" class="img-responsive" />
                                    </div>
                                    <div class="team-hover">
                                        <div class="desk">
                                            <h4>I love to design</h4>
                                            <p>Responsible for designing, coding and modifying websites, from layout to function and according to a team's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.</p>
                                        </div>
                                        <div class="s-link">
                                            <a href="www.facebook.com"><i class="fa fa-facebook"></i></a>
                                            <a href="www.twitter.com"><i class="fa fa-twitter"></i></a>
                                            <a href="www.google.com"><i class="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-title">
                                    <h5>Deon Holt</h5>
                                    <span>Front End Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;
