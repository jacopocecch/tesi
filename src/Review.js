import React from "react";
import qs from 'qs';
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';

import ItemForm from "./ItemForm";

const Review = ({ setForm, formData, navigation }) => {

    //const { link, series, site_interval, dex_interval, scrape_title, date, description, contents, authors, cover } = formData;

    const { response, loading, error } = useAxios({
        method: 'post',
        url: 'scraping.php',
        body: qs.stringify(formData),
    });

    const [data, setData] = useState([]);
    const { next, previous } = navigation;

    useEffect(() => {
        if (response !== null) {
            setData(response);
        }
    }, [response]);


    return (
        <div className="div-step col-12 border border-dark">
            
            {loading ? (
                <p>elaborazione...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>{data && <p>{data['editable'][0]['info']['cover_price']}</p>}</div>
                </div>
            )}
            <div>
                <button onClick={previous} className="btn btn-secondary">Indietro</button>
                <button onClick={next} className="btn btn-primary">Avanti</button>
            </div>
        </div>
    );
};

export default Review;