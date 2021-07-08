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
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const [scrapedData, setScrapedData] = useState([]);
    const { id } = step;

    function handleChange(newValue, index) {

        console.log(newValue);
        let copyData = [...scrapedData];
        console.log(copyData);
        let changeData = {...copyData[index]};
        copyData[index] = newValue;
        console.log(copyData)
        setScrapedData(copyData);
    }

    const props = { formData, setForm, navigation, scrapedData, setScrapedData };

    switch (id) {
        case "sites":
            return <Sites {...props} />;
        case "info":
            return <Info {...props} />;
        case "review":
            return <Review onChange={handleChange} {...props} />;
        case "submit":
            return <Submit {...props} />;
        default:
            return null;
    }
};

export default MultiStepForm;