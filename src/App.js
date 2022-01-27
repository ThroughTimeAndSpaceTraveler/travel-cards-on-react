import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"


export default function App() {

    const cards = data.map(item => {
        return (
            <Card 
                item={item}
            />
        )
    })

    return (
        <div className="app--container">
            <Header
                worldLogo="world-icon.svg"
            />
            
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}