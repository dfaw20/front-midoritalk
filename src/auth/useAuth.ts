import {useEffect, useState} from "react";
import type firebase from "firebase/compat";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";

export const useCurrentUser = (): firebase.User | null => {
    const [ user, setUser ] = useState<firebase.User | null>(null);

    useEffect(() => {
        return onAuthStateChanged(getAuth(), nextOrObserver => {
            setUser(nextOrObserver as firebase.User);
        });

    }, []);

    return user;
}

export const useLogout = (): { logout: () => void } => {

    const logout = (): void => {
        signOut(getAuth())
            .then(() => {
                console.log("Sign-out successful.");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return { logout };
};