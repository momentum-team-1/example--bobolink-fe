/* globals localStorage */

import React from 'react'
import 'tachyons'
import classnames from 'classnames'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      username: localStorage.getItem('bobolink_username') || '',
      token: localStorage.getItem('bobolink_auth_token')
    }

    this.setUserCredentials = this.setUserCredentials.bind(this)
  }

  setUserCredentials (username, token) {
    this.setState({
      username: username,
      token: token
    })
    localStorage.set('bobolink_username', username)
    localStorage.set('bobolink_auth_token', token)
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('bobolink_username')
    localStorage.removeItem('bobolink_auth_token')
  }

  render () {
    return (
      <div className='App bg-light-yellow min-vh-100 pt5'>
        <div className={classnames('bg-white', 'pa3', 'center', 'shadow-1', 'mw6')}>
          {
            this.state.token
              ? (
                <div>
                  <h2>Hello, {this.state.username}!</h2>
                  <button onClick={this.handleLogout}>Log out</button>
                </div>
              )
              : (
                <Login setUserCredentials={this.setUserCredentials} />
              )
          }
        </div>
      </div>
    )
  }
}

export default App
