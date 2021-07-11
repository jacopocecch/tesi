import React from "react";
import qs from 'qs';
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';

const sites = {
    "comicsbox" : ["Comicsbox", "https://www.comicsbox.it/"],
    "comicsbox_bonelli" : ["Comicsbox (Bonelli)", "https://www.comicsbox.it/"],
    "animeclick" : ["Animeclick", "https://www.animeclick.it/"],
    "fumetto_online" : ["Fumetto-Online", "https://www.fumetto-online.it/it/"],
    "archivio_marvel" : ["Archivio Marvel Italia", "http://www.archivioitaliamarvel.com/cgi-bin/magazinedb_mobile.pl?action=elencoeditori"],
    "inducks" : ["Inducks", "https://inducks.org/country.php?c=it"],
    "bonelli" : ["Sergio Bonelli Editore", "https://www.sergiobonelli.it/sezioni/43/fumetti?tag_0=1&noinit=true&tag_2=%5B%20TO%20now%5D&sortElement=tag_2,true&page=1&sortDefault=false"],
    "astorina" : ["Astorina", "https://www.diabolik.it/commerce/"]
};

const Submit = (props) => {

  const { navigation, scrapedData, siteData, defaultData, setInfoData } = props;

  const { go, previous} = navigation;

  const { response, loading, error } = useAxios({
        method: 'post',
        url: 'submit.php',
        body: qs.stringify(scrapedData),
    });

  return (
        <div className= "col-12 pt-3">  
            <h1 className="text-center">
                
                <a className="col-md-6" href={sites[siteData][1]} target="_blank">
                    <img src={"http://localhost:81/backend/logos/" + siteData + ".png"} alt="Logo" width="200" height="auto"/>
                </a>
            </h1>
            {loading ? (
                <div className="d-flex align-items-center justify-content-center m-5">
                    <p className="text-secondary h1 text-center">Elaborazione...</p>
                    <div className="spinner-border text-center text-secondary ml-3" role="status">
                        <span className="sr-only text-center">Loading...</span>
                    </div>
                </div>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p className="text-danger h1 text-center m-5">{error.message}</p>
                        </div>
                    )}
                    <div>{ response && (
                        response['status'] == 500 ? (
                            <p className="text-danger h1 text-center m-5">Errore: {response['statusText']}</p>
                        ) : (
                            <div className="m-5">
                                <p className="text-primary text-center h2"> L'inserimento è andato a buon fine.</p>
                                <p className="text-primary text-center h2"> Cliccare "Nuovo form" per effettuare un nuovo inserimento.</p>
                            </div>
                        )
                    )}</div>
                </div>
            )}
            {!loading &&
                <div className="text-center form-group">
                    <button onClick={() => { go("sites"); setInfoData(defaultData); }} className="btn btn-primary col-md-10 btn-lg mr-5 ml-5">Nuovo form</button>
                </div>
            }
        </div>
    );
};

export default Submit;