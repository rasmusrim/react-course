import React from 'react'
import './App.css'
import { PageHeader } from './components/PageHeader'
import { ContactInformation } from './components/ContactInformation'
import { Footer } from './components/Footer'

function App () {
  return (
    <>
      <div style={{ marginLeft: '50px' }}>
        <PageHeader title='Phone book'/>

        <div style={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap' }}>
          <ContactInformation name='Navn Ukjent' phone='413 78 543' email='navn@ukjent.org'/>
          <ContactInformation name='Lars Haaland' phone='146 12 432' email='navn@ukjent.org'/>
          <ContactInformation name='Alfhildr Enginsdottir' phone='564 34 543' email='navn@ukjent.org'/>
        </div>

      </div>
      <Footer/>
    </>

  )
}

export default App

// <Collapsible trigger='Contact us'>
