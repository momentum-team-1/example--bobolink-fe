import React from 'react'
import { getFollowedLinkData } from '../api'
import Links from './Links'

export default class FollowedLinksContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      more: null,
      links: []
    }
  }

  componentDidMount () {
    getFollowedLinkData(this.props.authToken).then(data => this.setState({
      more: data.next,
      links: data.results
    }))
  }

  render () {
    return (
      <Links links={this.state.links} />
    )
  }
}
