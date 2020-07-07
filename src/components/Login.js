import React from 'react'
import { getToken } from '../api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      error: null
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (event) {
    event.preventDefault()

    getToken(this.state.username, this.state.password)
      .then(token => {
        this.props.setUserCredentials(this.state.username, token)
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: 'There is no user with that username and password.' })
      })
  }

  render () {
    return (
      <div className='Login'>
        <form onSubmit={this.handleLogin}>
          <div className='red'>{this.state.error}</div>
          <div className='measure'>
            <label htmlFor='username' className='f6 b db mb2'>Username</label>
            <input
              id='username' className='input-reset ba b--black-20 pa2 mb2 db w-100'
              type='text' value={this.state.username}
              onChange={event => this.setState({ username: event.target.value })}
            />
          </div>
          <div className='measure'>
            <label htmlFor='password' className='f6 b db mb2'>Password</label>
            <input
              className='input-reset ba b--black-20 pa2 mb2 db w-100' type='password'
              id='password' value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          <div className='mt3'>
            <button type='submit' className='pointer f6 dim ph3 pv2 mb2 white bg-black bn'>Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
