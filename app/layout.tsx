import React from "react";
import "./globals.css"

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
        <body>
            {children}
        </body>
        </html>
    )
}