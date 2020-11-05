import React from 'react'
import { Logo } from './Logo'

export function PageHeader (props) {
  return (
    <div style={{ display: 'flex', flexFlow: 'row', width: '100%', justifyItems: 'center' }}>
      <Logo/>
      <h1>
        {props.title}
      </h1>
    </div>
  )
}
