import React from 'react'
import Card from './Card'

function ActiveCard({data,cardName}) {
  return (
    <div>
        <div className="active">
       <Card {...data} username={cardName}/>
        </div>
       
    </div>
    
  )
}

export default ActiveCard