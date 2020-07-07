/* globals localStorage */

import React from 'react'
import 'tachyons'
import classnames from 'classnames'
import Login from './components/Login'
import Links from './components/Links'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

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

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('bobolink_username')
    localStorage.removeItem('bobolink_auth_token')
  }

  render () {
    return (
      <Router>
        <div className='App bg-light-yellow min-vh-100 pt5'>
          <div className={classnames('bg-white', 'pa3', 'center', 'shadow-1', 'mw6')}>

          </div>
        </div>
      </Router>
    )
  }
}

export default App
