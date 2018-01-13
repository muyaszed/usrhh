import React, { Component } from 'react';
import { Button, Image, List, Container, Segment } from 'semantic-ui-react'

class Rooms extends Component {
	render() {
		return (
		  <Segment.Group>
		    <Segment>
		    	<Button fluid>Create new room</Button>
		    </Segment>
		    <Segment>
				<Container>


					<List divided verticalAlign='middle'>
					    <List.Item>
					      <List.Content floated='right'>
					        <Button>Join</Button>
					      </List.Content>
					      <List.Icon name='comments outline' size='large' verticalAlign='middle' />
					      <List.Content>
					         <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
		        			 <List.Description as='a'>Updated 10 mins ago</List.Description>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Content floated='right'>
					        <Button>Join</Button>
					      </List.Content>
					      <List.Icon name='comments outline' size='large' verticalAlign='middle' />
					      <List.Content>
					         <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
		        			 <List.Description as='a'>Updated 10 mins ago</List.Description>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Content floated='right'>
					        <Button>Join</Button>
					      </List.Content>
					      <List.Icon name='comments outline' size='large' verticalAlign='middle' />
					      <List.Content>
					         <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
		        			 <List.Description as='a'>Updated 10 mins ago</List.Description>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Content floated='right'>
					        <Button>Join</Button>
					      </List.Content>
					      <List.Icon name='comments outline' size='large' verticalAlign='middle' />
					      <List.Content>
					         <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
		        			 <List.Description as='a'>Updated 10 mins ago</List.Description>
					      </List.Content>
					    </List.Item>
					</List>

				</Container>
		    </Segment>
		  </Segment.Group>
		
		);
	}
}

export default Rooms;