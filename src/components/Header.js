import React from "react"
import styles from "../Header.css"

export default function Header(props) {
    return (
        <header className="header">
            <img 
            src={`../images/icon/${props.worldLogo}`} 
            alt="header logo"
            className="header--logo" 
            />
            <p className="header--title">my travel journal.</p>
        </header>
    )
}