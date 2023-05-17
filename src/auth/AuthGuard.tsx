import React from 'react'
import {type ReactNode} from "react";
import {useCurrentUser} from "./useAuth";

export const AuthGuard = (props: { children: ReactNode }): JSX.Element => {
    const user = useCurrentUser();

    if (user === null) {
        return <></>
    }

    return <>{props.children}</>
}