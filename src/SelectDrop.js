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

const colors = [
    [1, 'Bianco e nero'],
    [2, 'Colore'],
    [3, 'Bianco e nero & colore']
];

const bindings = [
    [1, "Brossurato"],
    [2, "Cartonato"],
    [3, "Spillato"],
    [4, "Cartonato con sovraccoperta"],
    [5, "Brossurato con sovraccoperta"]
];

const SelectDrop = ({ label, type, ...others }) => (
    <div className="form-group col-md-12">
        <label><b>{label}</b></label>
        <select className="form-control" {...others}>
            {(type === 'sites') ? (
                sites.map(([value, name]) => (
                    <option key={value} value={value}>{name}</option>
                ))
            ) : (type === 'colors') ? (
                colors.map(([value, name]) => (
                    <option key={value} value={value}>{name}</option>
                ))
            ) : (
                bindings.map(([value, name]) => (
                    <option key={value} value={value}>{name}</option>
                ))
            )}
        </select>
    </div>
);

export default SelectDrop;