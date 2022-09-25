import React from 'react'
import Card from './Card'

function InactiveCards({data,cardName, id}) {
  return (
    <>
       <Card {...data} username={cardName} id={id} key={id}/> 
    </>
  )
}

export default InactiveCards