import './App.css';
import Cards from './Pages/Cards';
import {Routes, Route} from "react-router-dom"
import AddNewCard from './Pages/AddNewCard';
import { getUser } from './slices/userSlice'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(getUser())
  },[])


  const {user,cardName,cards} = useSelector((state)=>state.user)
  const username = user?.name
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Cards user={user} cardName={cardName} data={cards} />}/>
        <Route path='/AddNew' element={<AddNewCard data={cardName} cardName={username} />}/>
      </Routes>
    </div>
  );
}

export default App;
