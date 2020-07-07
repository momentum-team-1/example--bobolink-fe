import React from 'react'
import { getLinkData } from '../api'

export default class Links extends React.Component {
  constructor () {
    super()
    this.state = {
      more: null,
      links: []
    }
  }

  componentDidMount () {
    getLinkData(this.props.authToken).then(data => this.setState({
      more: data.next,
      links: data.results
    }))
  }

  render () {
    return (
      <div className='Links'>
        {this.state.links.map(link => (
          <div key={link.id} className='mb2 f4'>
            <a href='{link.url}'>{link.title}</a>
          </div>
        ))}
      </div>
    )
  }
}
