import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
    <div className="search">
      <input
        className="input"
        type="text"
        placeholder="Agregar Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      {/* <input type="submit" value="Agregar" /> */}
      <button className="btn btn-success" type="submit">Agregar</button>
      </div>
    </form>
  );
}
