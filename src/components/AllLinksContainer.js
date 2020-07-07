import React from 'react'
import { getAllLinkData } from '../api'
import Links from './Links'

export default class AllLinksContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      more: null,
      links: []
    }
  }

  componentDidMount () {
    getAllLinkData(this.props.authToken).then(data => this.setState({
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
