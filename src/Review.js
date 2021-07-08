import React from "react";
import qs from 'qs';
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';

import ItemForm from "./ItemForm";
import ReviewForm from "./ReviewForm";

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

const Review = (props) => {

    const { formData, setForm, navigation, onChange, setScrapedData } = props;

    const { site } = formData;

    const { response, loading, error } = useAxios({
        method: 'post',
        url: 'scraping.php',
        body: qs.stringify(formData),
    });

    const [data, setData] = useState([]);
    const { next, previous } = navigation;

    useEffect(() => {
        if (response !== null) {
            setData(response.editable);
            setScrapedData(response.editable)
        }
    }, [response]);


    function handleChange(newValue, index) {
        onChange(newValue, index);
    }

    return (
        <div className= "col-12 pt-3">  
            <h1 className="text-center">
                
                <a className="col-md-6" href={sites[site][1]} target="_blank">
                    <img src={"http://localhost:81/backend/logos/" + site + ".png"} alt="Logo" width="200" height="auto"/>
                </a>
            </h1>
            {loading ? (
                <p className="text-secondary display-4 text-center">Elaborazione...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p className="text-danger display-4 text-center">{error.message}</p>
                        </div>
                    )}
                    <div>{ data && (
                        response['status'] == 500 ? (
                            <p className="text-danger display-4 text-center">Errore: {response['statusText']}</p>
                        ) : (
                            <ReviewForm data={data} onChange={handleChange}/>
                        )
                    )}</div>
                </div>
            )}
            <div className="text-center form-group">
                <button onClick={previous} className="btn btn-secondary col-md-5 btn-lg mr-5 ml-5">Indietro</button>
                <button onClick={next} className="btn btn-primary col-md-5 btn-lg mr-5 ml-5">Avanti</button>
            </div>
        </div>
    );
};

export default Review;