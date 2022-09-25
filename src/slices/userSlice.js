import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


export const getUser = createAsyncThunk("Users/getUser", async ()=>{
    return fetch(`https://randomuser.me/api/`).then(res=>res.json())
})

const usersSlice = createSlice({
    name:"Users",
    initialState:{
        cards: [
            {
                cardNum: "1234567891011123",
                expireYear:"12",
                expireMonth:"12",
                vendor: "Visa",
                ccv: "402"
            },
            {
                cardNum: "1234567891011124",
                expireYear:"12",
                expireMonth:"14",
                vendor: "Amex",
                ccv: "402"
            },
            {
                cardNum: "1234567891011253",
                expireYear:"12",
                expireMonth:"12",
                vendor: "SEB",
                ccv: "402"
            },
        
    ],
        user:null,
        activeCard:[],
    },
    reducers:{
        getCards: (state, {payload})=>{
            if ([...state.cards].length >= 3){
                alert("not more then 4 cards")
                return
            }
        state.cards = [...state.cards, payload]
        },
        changeActive: (state, {payload})=>{
                state.cards.push(state.activeCard)
                state.activeCard = state.cards.find(card =>card.cardNum===payload)
                state.cards.splice(state.cards.findIndex(card=>card.cardNum===payload),1)
                },
        deleteCard:(state, {payload})=>{
            state.cards.splice(payload, 1)
        }
    },
    extraReducers:{
        [getUser.fulfilled]: (state, {payload})=>{
            if(state.user ===null){
                state.user = payload.results[0]
                state.activeCard = state.cards.shift()
            }
        },
        
    }
})

export const { getCards, changeActive,deleteCard} = usersSlice.actions

export default usersSlice.reducer