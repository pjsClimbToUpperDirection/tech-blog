import React from "react";
import "../components/globals.css"
import "../components/input.css"
import {Provider} from "react-redux";
import store from "../tokenStorage/redux/store";
import TokenContainer from "../tokenStorage/component/tokenContainer";
import {configureStore} from "@reduxjs/toolkit";
import TokenReducer from "../tokenStorage/redux/reducer";

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function RootLayout({
    children
    }: {
    children: React.ReactNode
}) {
    const store = configureStore({ // createStore 대신 사용이 권장됨
        reducer: TokenReducer
    });
    return (
        <html lang="en">
            <body className={"bg-black"}>
            <TokenContainer/>
            {children}
            </body>
        </html>
    )
}

/*
* <Provider store={store}>
                {children}
            </Provider>*/