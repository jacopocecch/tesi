import React from "react";

const sites = [
    ['comicsbox', "Comicsbox"],
    ["comicsbox-bonelli", "Comicsbox (Bonelli)"],
    ["animeclick", "Animeclick"],
    ["fumetto-online", "Fumetto-Online"],
    ["archivio-marvel", "Archivio Marvel Italia"],
    ["inducks", "Inducks"],
    ["bonelli", "Sergio Bonelli Editore"],
    ["astorina", "Astorina"]
];

const SiteDrop = ({ label, ...others }) => (
    <>
        <label>{label}</label>
        <select {...others}>
            {sites.map(([value, name]) => (
                <option key={value} value={value}>{name}</option>
            ))}
        </select>
    </>
);

export default SiteDrop;