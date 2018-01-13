import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

class Home extends Component {

	login() {
	    this.props.auth.login();
	}

	render() {
		return (
			<div>
        

        
	          <Segment
	            inverted
	            textAlign='center'
	            style={{ minHeight: 500, padding: '1em 0em' }}
	            vertical
	          >

	            <Container text>
	              <Header
	                as='h1'
	                content='Usrh'
	                inverted
	                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
	              />
	              <Header
	                as='h2'
	                content='The Circle of Understanding, Relationship and Support '
	                inverted
	                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
	              />
	              <Button primary size='huge' onClick={this.login.bind(this)}>
	                Get Started
	                <Icon name='right arrow' />
	              </Button>
	            </Container>
	          </Segment>
	     

	        <Segment style={{ padding: '8em 0em' }} vertical>
	          <Container text>
	            
	          </Container>
	        </Segment>

	        <Segment inverted vertical style={{ minHeight: 300, padding: '5em 0em' }}>
	          <Container>
	            
	          </Container>
	        </Segment>
	      </div>
		);
	}
}

export default Home;