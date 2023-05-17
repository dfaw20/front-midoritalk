import React from 'react'
import './App.css'
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import { Route, Switch } from "react-router-dom";
import RoomsScreen from "./screens/RoomsScreen";
import AppHeader from "./components/AppHeader";

function App(): JSX.Element {
  return (
    <div className="App">
        <AppHeader/>

        <Switch>
            <Route path="/">
                <RoomsScreen />
            </Route>
            <Route path="/login">
                <LoginScreen />
            </Route>
            <Route path="/sign_up">
                <SignupScreen />
            </Route>
        </Switch>
    </div>
  )
}

export default App
