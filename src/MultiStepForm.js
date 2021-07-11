import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { useState } from 'react';

import Sites from "./Sites";
import Info from "./Info";
import Review from "./Review";
import Submit from "./Submit";

import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";
import "./style.css";

const steps = [
    { id: "sites" },
    { id: "info" },
    { id: "review" },
    { id: "submit"}
];

const defaultData = {
    site: "comicsbox",
    link: "",
    series: "",
    site_interval: "",
    dex_interval: "",
    title: "false",
    date: true,
    price: true,
    description: true,
    isbn: true,
    pages: true,
    format: true,
    color: true,
    binding: true,
    contents: true,
    authors: true,
    personas: true,
    cover: false,
    partialUpdate: false,
    astorina_publication: "altro"
};

const MultiStepForm = () => {
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const [scrapedData, setScrapedData] = useState([]);
    const [siteData, setSiteData] = useState('comicsbox');
    const [infoData, setInfoData] = useState(defaultData);
    const { id } = step;

    function handleScrapedDataChange(newValue, index) {

        let data = [...scrapedData];
        data[index] = newValue;
        setScrapedData(data);
    }

    const sitesProps = { siteData, setSiteData, navigation };
    const infoProps = { infoData, setInfoData, siteData, navigation };
    const reviewProps = { infoData, siteData, navigation, scrapedData, setScrapedData };
    const submitProps = { scrapedData, setScrapedData, siteData, setInfoData, defaultData, navigation };

    switch (id) {
        case "sites":
            return <Sites {...sitesProps} />;
        case "info":
            return <Info {...infoProps} />;
        case "review":
            return <Review onChange={handleScrapedDataChange} {...reviewProps} />;
        case "submit":
            return <Submit {...submitProps} />;
        default:
            return null;
    }
};

export default MultiStepForm;