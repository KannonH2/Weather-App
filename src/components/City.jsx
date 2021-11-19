import React from "react";
import "./City.css"
//creo el componente funcional City que mostrará los detalles de una ciudad
//recibida por props en la ruta /ciudad/{ciudadId}
export default function City({ city }){
    return(
        <div className="main">
            <h2 className="detailName">{city.name}</h2>
            <div className="sub-main">
                <div className="description">Temperatura: {city.temp}°</div>
                <div className="description">Clima: {city.weather}</div>
                <div className="description">Viento: {city.wind} Km/h</div>
                <div className="description">Nubosidad: {city.clouds}</div>
                <div className="description">Latitud: {city.latitud}</div>
                <div className="description">Longitud: {city.longitud}</div>
            </div>
        </div>
    )
}