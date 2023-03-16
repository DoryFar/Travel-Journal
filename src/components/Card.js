import React from "react"

export default function Card(props) {
    
    return (
        <div className="card">
                <img 
                    src={props.imageUrl} 
                    className="image"
                    alt={`City of ${props.title}`} 
                />
            <div className="info">
                <div className="location">
                    <img src="https://www.freepnglogos.com/uploads/pin-png/location-pin-connectsafely-37.png" alt="location pin" className="pin"/>
                    <h3 className="country">{props.location}</h3>
                    <a href={props.googleMapsUrl} className="map">View on Google Maps</a>
                </div>
                <h2 className="city">{props.title}</h2>
                <h4 className="date">{props.startDate} - {props.endDate}</h4>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
}