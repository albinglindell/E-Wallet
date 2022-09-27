import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCards } from '../slices/userSlice'
import Card from '../components/Card'
import { useNavigate } from "react-router-dom";


function AddNewCard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [newData, setNewData] = useState("XXXXXXXXXXXXXXXX" )
    const [month, setMonth] = useState("MM")
    const [year, setYear] = useState("YY")
    const [vendor, setVendor] = useState("vendor")



    const addCardFunc =()=>{
        let CARDNUM = document.querySelector("#CARDNUM").value
        let VALID = document.querySelector("#VALID").value
        let BANK = document.querySelector("#BANK").value
        let CCV = document.querySelector("#CCV").value

        if(BANK === "vendor" || CARDNUM ==="" || CARDNUM.length > 16 || CARDNUM.length < 16 || VALID.length < 4 || VALID.length >4 || CCV ==="" ){
            
            alert("Måste fylla i allt rätt")
            return
        }else{
            dispatch(getCards({
                    cardNum:CARDNUM,
                    vendor:BANK,
                    expireYear: VALID.slice(2),
                    expireMonth: VALID.slice(0,2),
                    ccv: CCV,
            }))
            navigate("/")
        }
    }

    const {user} = useSelector((state)=> state.user)
    const username = user?.name
    
    
    let changeNum = ()=>{
        let CARDNUM = document.querySelector("#CARDNUM").value
        if(CARDNUM.length > 16){
            return
        }else{
            setNewData(CARDNUM)
        }
        
    }
    let changeValid = ()=>{
        let VALID = document.querySelector("#VALID").value
        if(VALID.length <=2){
            setMonth(VALID)
        }else{
            setYear(VALID.slice(2))
        }
    }
    let changeVendor =()=>{
        let BANK = document.querySelector("#BANK").value
        setVendor(BANK)
    }
    
    let cardNumSpace = [...newData].map((d,i)=> (i)%4 === 0 ?  " " + d : d).join("").trim()

    return (
        <div className="addCardContainer">
            <form>
            <h1>ADD A NEW BANK CARD</h1>
            <div>
            <Card month={month} year={year} username={username} newData={cardNumSpace} New={true} newBank={vendor}/>

            </div>
            <div className="cardNum">
            <label htmlFor="CARDNUM">CARD NUMBER</label>
            <input required placeholder=' XXXX XXXX XXXX XXXX' minLength={16} maxLength={16} onChange={changeNum} id='CARDNUM' type="text" />
            </div>
            
            <div className="cardName">
            <label  aria-disabled htmlFor="CARDHOLDER_NAME">CARDHOLDER NAME</label>
            <input required value={username?.first + " " + username?.last} id='CARDHOLDER_NAME'readOnly type="text" />
            </div>

            <div className="FormContainer2">

            <div className="valid">
            <label htmlFor="VALID">VALID THRU</label>
            <input required placeholder=' MM/YY' maxLength={4} onChange={changeValid} id='VALID' type="text" />
            </div>

            <div className="ccv">
            <label htmlFor="CCV">CCV</label>
            <input maxLength={3} required placeholder=' XXX' id='CCV' type="text" />
            </div>

            </div>
            <div className="vendor">
            <label htmlFor="BANK">VENDOR</label>
            <select required defaultValue={"vendor"} onChange={changeVendor} name="bank" id="BANK">
                <option disabled readOnly value="vendor">vendor</option>
                <option value="SEB">SEB</option>
                <option value="Amex">Amex</option>
                <option value="Visa">Visa</option>
                <option value="Bitcoin">Bitcoin</option>
            </select>
            </div>

            <button onClick={addCardFunc}>ADD CARD</button>
            </form>
          </div>
        )
}

export default AddNewCard


