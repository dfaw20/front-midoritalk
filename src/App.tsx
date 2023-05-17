import React from 'react'
import './App.css'
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import {Route, Switch} from "react-router-dom";
import RoomsScreen from "./screens/RoomsScreen";
import AppHeader from "./components/AppHeader";
import {AuthGuard} from "./auth/AuthGuard";

function App(): JSX.Element {
    return (
        <div className="App">
            <AppHeader/>

            <Switch>
                <Route path="/login">
                    <LoginScreen/>
                </Route>
                <Route path="/sign_up">
                    <SignupScreen/>
                </Route>
                <Route path="/">
                    <AuthGuard>
                        <RoomsScreen/>
                    </AuthGuard>
                </Route>
            </Switch>
        </div>
    )
}

export default App
