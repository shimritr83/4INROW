import { useState } from 'react'
import './App.css'
import SettingsGame from "./assets/SettingsGame.jsx";
import GameBoard from "./assets/GameBoard.jsx";



function App() {
    const [screen, setScreen] = useState();




    const switchToSettings = ()=> {
        setScreen("SettingsGame")
    }

   const switchToGame=()=>{
        setScreen("GameBoard");
    }


    return(
        <SettingsGame/>
    )
}
export default App
