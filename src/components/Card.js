import React from "react"
import styles from "../Card.css"


export default function Card(props) {
    return (
        <div className="card">
            <div className="card--div__img">
                <img
                    src={`../images/country/${props.item.imageUrl}`} 
                    alt="location image" className="card--main__img"
                />
            </div>
            <div className="card--div__info">
                <div className="card--div__flex">
                    <img 
                        src={`../images/icon/${props.item.iconUrl}`} alt="icon"
                        className="card--map__icon" 
                    />

                    <p className="card--country">{props.item.location}</p>

                    <a className="card--link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className="card--title">{props.item.title}</h1>

                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>

                <p className="card--description__text">{props.item.description}</p>
            </div>
        </div>
    )
}