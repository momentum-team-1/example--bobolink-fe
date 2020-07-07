import React from 'react'
import { getLinkData, getMyLinkData } from '../api'
import Links from './Links'

export default class MyLinksContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      more: null,
      links: []
    }

    this.getMore = this.getMore.bind(this)
  }

  componentDidMount () {
    getMyLinkData(this.props.authToken).then(data => this.setState({
      moreURL: data.next,
      links: data.results
    }))
  }

  getMore () {
    if (this.state.moreURL) {
      getLinkData(this.state.moreURL, this.props.authToken).then(data => this.setState({
        moreURL: data.next,
        links: this.state.links.concat(data.results)
      }))
    }
  }

  render () {
    return (
      <Links links={this.state.links} getMore={this.getMore} hasMore={this.state.moreURL} />
    )
  }
}
