import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Sites from "./Sites";
import Info from "./Info";
import Review from "./Review";

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
    comicset: false,
    astorina_publication: "altro"
};

const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
        case "sites":
            return <Sites {...props} />;
        case "info":
            return <Info {...props} />;
        case "review":
            return <Review {...props} />;
        /*case "submit":
            return <Submit {...props} />;*/
        default:
            return null;
    }
};

export default MultiStepForm;