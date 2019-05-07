import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render () {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <div align="center">
            <h2>CAMBshare Inc.</h2>
            <img
              src="https://cdn.lynda.com/course/738522/738522-636646699262549764-16x9.jpg"
              alt="avatar"
              style={{ height: '250px', width: '800px' }}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>If you have any questions, feel free to contact us at cambshare@gmail.com</p>
          </div>
          <div align="center">
            <h2>Contact US</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-fax" aria-hidden="true" />
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    ithelp@cambco.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i className="fa fa-skype" aria-hidden="true" />
                    Chat Now
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </div>
        </Grid>
      </div>
    )
  }
}

export default Contact;
