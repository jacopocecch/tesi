import React from "react";
import qs from 'qs';
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';

import ItemForm from "./ItemForm";
import ReviewForm from "./ReviewForm";

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
        <div className="text-center">  
            {loading ? (
                <p>Elaborazione...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>{ data && (
                        data['status'] == 500 ? (
                            <p>Errore: {data['statusText']}</p>
                        ) : (
                            <ReviewForm data={data.editable} />
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