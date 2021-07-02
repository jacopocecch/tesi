import React from "react";
import qs from 'qs';
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';

import ItemForm from "./ItemForm";

const Review = ({ setForm, formData, navigation }) => {

    //const { link, series, site_interval, dex_interval, scrape_title, date, description, contents, authors, cover } = formData;

    const { response, loading, error } = useAxios({
        method: 'post',
        url: 'bonelli.php',
        body: qs.stringify(formData),
    });

    console.log(qs.stringify(formData));

    const [data, setData] = useState([]);
    const { next, previous } = navigation;

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    console.log(response);

    return (
        <div className="div-step col-12 border border-dark">
            Prova
            <div>
                <button onClick={previous}>Indietro</button>
                <button onClick={next}>Avanti</button>
            </div>
        </div>
    );
};

export default Review;