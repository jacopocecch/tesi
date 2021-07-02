import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Sites from "./Sites";
import Info from "./Info";
import Review from "./Review";

import "./styles.css";

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
    scrape_title: "",
    date: "",
    description: "",
    contents: "",
    authors: "",
    cover: ""
};

const MultiStepForm = ({ images }) => {
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