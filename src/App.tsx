import React from 'react'
import './App.css'
import CharactersScreen from './screens/CharactersScreen'
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

function App(): JSX.Element {
  return (
    <div className="App">
        <LoginScreen/>
        <SignupScreen/>
        <CharactersScreen />
    </div>
  )
}

export default App
