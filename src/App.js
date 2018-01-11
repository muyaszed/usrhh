import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LoginForm from './components/LoginForm'


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    console.log(this);
    const { isAuthenticated } = this.props.auth;

    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            {
              !isAuthenticated() && (
                <li><a onClick={this.login.bind(this)}>Signin</a></li>    
              )
            }

            {
              isAuthenticated() && (
                <div>
                  <li><Link to="/create-room">Create Room</Link></li>
                  <li><Link to="/find-room">Find Room</Link></li>  
                  <li><a onClick={this.logout.bind(this)}>Signout</a></li> 
                </div>
              )
            }
            
           
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/create-room" component={CreateRoom}/>
          <Route path="/find-room" component={FindRoom}/>
        </div>
      </Router>
    )
  }
}
  


const Home = () => (
  <div>
    
    
    
  </div>
)

const CreateRoom = () => (
  <div>
    <h2>Create Room</h2>
  </div>
)

const FindRoom = () => (
  <div>
    <h2>Find Room</h2>
    
  </div>
)


export default App