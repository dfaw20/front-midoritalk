import React, {type ChangeEvent, useState} from 'react'
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {Link, useHistory} from "react-router-dom";

function LoginScreen(): JSX.Element {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const history = useHistory();

    function submitLogin(): void {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {


                // Signed in
                const user = userCredential.user;

                console.log(user);

                history.push('/')
            })
            .catch((error) => {
                const errorMessage = error.message;

                console.log(errorMessage)
            });
    }

    function handleChangeEmail(e: ChangeEvent<HTMLInputElement>): void {
        setInputEmail(e.target.value)
    }

    function handleChangePassword(e: ChangeEvent<HTMLInputElement>): void {
        setInputPassword(e.target.value)
    }

    return (
        <>
            <input type='email' onChange={handleChangeEmail} value={inputEmail}/>
            <input type='password' onChange={handleChangePassword} value={inputPassword}/>

            <button onClick={submitLogin}>ログイン</button>

            <Link to="/sign_up">
                新規会員登録
            </Link>
        </>
    )
}

export default LoginScreen
