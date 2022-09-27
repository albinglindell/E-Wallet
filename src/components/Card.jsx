import React from 'react'
import { useDispatch } from 'react-redux'
import { changeActive, deleteCard } from '../slices/userSlice'


function Card({cardNum, username,  expireYear, expireMonth, New, newData, vendor,month,year, id, newBank}) {
    let cardNumFunc = (num)=>{
    let newNum = [...num].map((number,i)=> (i)%4 === 0 ?  " " + number : number).join("").trim()
    return newNum
    }
    const name =  `${username?.first} ${username?.last}`.toUpperCase()
    let bgColor

    const dispatch = useDispatch()
        if(vendor ==="Visa"){
            bgColor="Visa"
        }else if(vendor ==="Amex"){
            bgColor = "Amex"
        }else if(vendor==="SEB"){
            bgColor = "SEB"
        }else if(vendor==="Bitcoin"){
            bgColor = "Bitcoin"
        }

    return (
        <div className={New ? "Card New": `Card ${bgColor}`}>
            <div className="bgImg"></div>
        <div className="TopOfCard">
            <p>{vendor ? vendor : newBank}</p>
            <div className="NfcImg"></div>
        </div>
        <h2>{cardNum ?  cardNumFunc(cardNum) : newData}</h2>
        <div className="bottomOfCard">
            <div>
                <p>CARDHOLDER NAME</p>
            <h3>{name}</h3>
            </div>
            <div>
                <p>VALID THRU</p>
             <>
                {expireMonth ? <h3>{expireMonth}/{expireYear}</h3> : <h3>{month}/{year}</h3>}
            </>
            </div>
        </div>
        <div className="hoverMenu active">
            <button className='hoverBtn' onClick={()=>dispatch(deleteCard(id))}>Delete</button>
            <button className='hoverBtn' onClick={()=>dispatch(changeActive(cardNum))}>Activate</button>
        </div>
    </div>
  )
}

export default Card