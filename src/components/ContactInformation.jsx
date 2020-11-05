import React from 'react'
import { Logo } from './Logo'
import { ContactPersonButton } from './ContactPersonButton'

export function ContactInformation (props) {
  return (
    <div style={{ border: '1px solid black', width: '400px', padding: '20px', margin: '10px' }}>
      <Logo/>

      <h2>{props.name}</h2>

      <p>
        Telefon: {props.phone}
      </p>

      <p>
        Email: {props.email}
      </p>

      <ContactPersonButton email={props.email}/>


    </div>
  )
}
