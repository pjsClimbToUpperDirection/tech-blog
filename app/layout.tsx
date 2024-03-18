import React from "react";
import "../components/globals.css"
import "../components/input.css"
import TokenContainer from "../tokenStorage/component/tokenContainer";

export const metadata = {
    title: 'is building..',
    description: 'for my ability',
}

export default function RootLayout({
    children
    }: {
    children: React.ReactNode
}) {
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
const store = configureStore({ // createStore 대신 사용이 권장됨
        reducer: TokenReducer
    });
* <Provider store={store}>
                {children}
            </Provider>*/