/* globals localStorage */

import React from 'react'
import 'tachyons'
import classnames from 'classnames'
import Login from './components/Login'
import MyLinksContainer from './components/MyLinksContainer'
import AllLinksContainer from './components/AllLinksContainer'
import FollowedLinksContainer from './components/FollowedLinksContainer'
import Logout from './components/Logout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      username: localStorage.getItem('bobolink_username') || '',
      token: localStorage.getItem('bobolink_auth_token')
    }

    this.setUserCredentials = this.setUserCredentials.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  setUserCredentials (username, token) {
    this.setState({
      username: username,
      token: token
    })
    localStorage.setItem('bobolink_username', username)
    localStorage.setItem('bobolink_auth_token', token)
  }

  handleLogout () {
    this.setState({ token: null, username: '' })
    localStorage.removeItem('bobolink_username')
    localStorage.removeItem('bobolink_auth_token')
  }

  render () {
    return (
      <Router>
        <div className='App bg-light-yellow min-vh-100 pt5'>
          <div className={classnames('bg-white', 'pa3', 'center', 'shadow-1', 'mw6')}>
            {
              this.state.token
                ? (
                  <div>
                    <p>Hi, {this.state.username}! <Link to='/logout/'>Log out</Link></p>
                    <p>
                      <Link to='/'>My links</Link> | <Link to='/followed/'>Links from users I follow</Link> | <Link to='/all/'>Links from all users</Link>
                    </p>
                    <Switch>
                      <Route exact path='/'><MyLinksContainer authToken={this.state.token} /></Route>
                      <Route path='/all/'><AllLinksContainer authToken={this.state.token} /></Route>
                      <Route path='/followed/'><FollowedLinksContainer authToken={this.state.token} /></Route>
                      <Route path='/logout/'><Logout onLogout={this.handleLogout} /></Route>
                    </Switch>
                  </div>

                )
                : <Login setUserCredentials={this.setUserCredentials} />
            }

          </div>
        </div>
      </Router>
    )
  }
}

export default App
