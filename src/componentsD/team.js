import React, { Component } from 'react';
import { Card, CardTitle, CardText, Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
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

  render() {
    return(
      <div className="About-us-wrap">
      
    
      <br></br> {/*was going to use grids but this will do for now. Everything is a placehold for now. Will probably switch from a box style to rounded pics with descriptions on the side.*/}
        <div className="page-content">
          {/* Carlos */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', /*height: '176px',*/ background: 'url(http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png) center / cover'}} >Carlos Orozco</CardTitle>
            <CardText>
            <img src={Carlos} style={{height: '176px', width:'176px'}}/>                       
              <b>Role:Database Administrator</b>
              <p>Carlos' primary role was to set up the database for the CAMBshare service with an emphasis on security policies to be implemented in the database.</p>
            </CardText>
          </Card>

          {/* Amir */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000',/*height: '176px',*/ background: 'url(http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png) center / cover'}} >Amir Mesbahi</CardTitle>
            <CardText>
            <img src={Amir} style={{height: '176px', width:'176px'}}/> 
            <b>Role: Architect</b>
            <p>Amir designs and implements solutions for the website. He is responsible for the availability and reliability of the website.</p>
            </CardText>
          </Card>

          {/* Misael */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', /*height: '176px',*/ background: 'url(http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png) center / cover'}} >Misael Vargas</CardTitle>
            <CardText>
            <img src={Misael} style={{height: '176px', width:'176px'}}/> 
            <b>Role: Front End/ Back End Development</b>
            <p>Misael's purpose is to work with React and Node.js back end server development to make sure that web page and back end are both communicating correctly. In addition resolve issues relating to CORS.</p>
            </CardText>
          </Card>

          {/* Brandon */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', /*height: '176px',*/ background: 'url(http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png) center / cover'}} >Brandon Rodriguez</CardTitle>
            <CardText>
            <img src={Brandon} style={{height: '176px', width:'176px'}}/> 
            <b>Role: Database Administrator</b>
            <p>Brandon's main purpose is focused on the implimitation of the database and connection with the server.</p>
            </CardText>
          </Card>

          {/* Deon */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', /*height: '176px',*/ background: 'url(http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png) center / cover'}} >Deon Holt</CardTitle>
            <CardText>
            <img src={Deon} style={{height: '176px', width:'176px'}}/> 
            <b>Role: Front End Developer</b>
            <p>Responsible for designing, coding and modifying websites, from layout to function and according to a team's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation.</p>
            </CardText>
          </Card>
        </div>
     
   
      </div>           
    )
  }
}

export default Team;
