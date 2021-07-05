import React from "react";

const sites = [
    ['comicsbox', "Comicsbox"],
    ["comicsbox_bonelli", "Comicsbox (Bonelli)"],
    ["animeclick", "Animeclick"],
    ["fumetto_online", "Fumetto-Online"],
    ["archivio_marvel", "Archivio Marvel Italia"],
    ["inducks", "Inducks"],
    ["bonelli", "Sergio Bonelli Editore"],
    ["astorina", "Astorina"]
];

const SiteDrop = ({ label, ...others }) => (
    <>
        <label>{label}</label>
        <select className="form-control" {...others}>
            {sites.map(([value, name]) => (
                <option key={value} value={value}>{name}</option>
            ))}
        </select>
    </>
);

export default SiteDrop;