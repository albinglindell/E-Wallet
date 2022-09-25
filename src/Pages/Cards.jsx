import React from 'react'
import {Link} from "react-router-dom"
import ActiveCard from "../components/ActiveCard"
import {  useSelector } from 'react-redux';
import InactiveCards from '../components/InactiveCards';



function Cards({data}) {
  const {user,activeCard} = useSelector((state)=> state.user)
  const username = user?.name

  return (
    <div>
      <h1>E-WALLET</h1>
        {activeCard && <ActiveCard data={activeCard} cardName={username}/>}
        <div className="inactive">
            {data && data.map((inactiveCards, i) =>{
                 return <InactiveCards cardName={username} data={inactiveCards} key={i} id={i} />
            })}

        </div>
        
        <Link to={"/AddNew"} > 
            <button className='AddNewBtn'>Add New Card</button>
        </Link>
  
    </div>
  )
}

export default Cards
