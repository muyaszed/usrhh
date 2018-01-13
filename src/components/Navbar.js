import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


class Navbar extends Component {

	login() {
	    this.props.auth.login();
	}

	logout() {
	    this.props.auth.logout();
	}
	  state = { activeItem: 'home'}

	  hideFixedMenu = () => this.setState({ visible: false })
	  showFixedMenu = () => this.setState({ visible: true })

	  handleItemClick = (e, { name, route }) => {
	    this.setState({ activeItem: name });
	  }

	render() {
		
    	const { activeItem } = this.state
    	const { isAuthenticated } = this.props.auth;

		return (
			<div>
			

			<Visibility
	          once={false}
	        >
	          <Segment
	            inverted
	            textAlign='center'
	            style={{ minHeight: 100, padding: '1em 0em' }}
	            vertical
	          >
	            <Container>
	              <Menu inverted pointing secondary size='large'>
	                <Menu.Item as={ Link } to="" name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
	                <Menu.Item as={ Link } to="about" name="about" active={activeItem === 'about'} onClick={this.handleItemClick}>About</Menu.Item>
	                {
	                	isAuthenticated() && (
	                		<Menu.Item as={ Link } to="rooms" name="rooms" active={activeItem === 'rooms'} onClick={this.handleItemClick}>Rooms</Menu.Item>
	                	)

	                }
	                
	                
	                {
	                	!isAuthenticated() && (
			                <Menu.Item position='right'>
			                  <Button as='a' inverted onClick={this.login.bind(this)}>Log in</Button>
			                  
			                </Menu.Item>
		                )
	            	}
	            	{
	            		isAuthenticated() && (
			                <Menu.Item position='right'>
			                  <Button as='a' inverted onClick={this.logout.bind(this)}>Log out</Button>
			                  
			                </Menu.Item>
		                )
	            	}
	              </Menu>
	            </Container>
	          </Segment>
	        </Visibility>
	        </div>
		);
	}
}

export default Navbar;