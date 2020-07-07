import React from 'react'

export default function Links ({ links, hasMore, getMore }) {
  console.log({ links })
  return (
    <div className='Links'>
      {links.map(link => (
        <div key={link.id} className='mb2 f4'>
          <a href={link.url}>{link.title}</a> <span className='gray f6'>{link.owner}</span>
        </div>
      ))}

      {hasMore && <p><button onClick={getMore}>Get more</button></p>}
    </div>
  )
}
