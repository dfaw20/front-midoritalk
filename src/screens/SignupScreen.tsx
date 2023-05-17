import React, {type ChangeEvent, useState} from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignupScreen(): JSX.Element {

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    function submitSignup(): void {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {


                // Signed in
                const user = userCredential.user;

                console.log(user);
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
      サインアップ
        <input onChange={handleChangeEmail} value={inputEmail}/>
        <input onChange={handleChangePassword} value={inputPassword}/>

        <button onClick={submitSignup}>新規登録</button>
    </>
  )
}

export default SignupScreen
