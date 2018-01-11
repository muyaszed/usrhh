import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LoginForm from './components/LoginForm'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-room">Create Room</Link></li>
        <li><Link to="/find-room">Find Room</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/create-room" component={CreateRoom}/>
      <Route path="/find-room" component={FindRoom}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <LoginForm />
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