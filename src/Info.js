import React from "react";

import ItemForm from "./ItemForm";

const Info = ({ setForm, formData, navigation }) => {

    const { link, series, site_interval, dex_interval, scrape_title, date, description, contents, authors, cover } = formData;

    const { next, previous } = navigation;

    return (
        <div className="div-step col-12 border border-dark">
            <ItemForm
                label="Link"
                name="link"
                value={link}
                onChange={setForm}
            />
            <ItemForm
                label="ID collana"
                name="series"
                value={series}
                onChange={setForm}
            />
            <ItemForm
                label="Numeri Comicsbox"
                name="site_interval"
                value={site_interval}
                onChange={setForm}
            />
            <ItemForm
                label="Numeri collana DEX"
                name="dex_interval"
                value={dex_interval}
                onChange={setForm}
            />
            <div>
                <button onClick={previous}>Indietro</button>
                <button onClick={next}>Avanti</button>
            </div>
        </div>
    );
};

export default Info;