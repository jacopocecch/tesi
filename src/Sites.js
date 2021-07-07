import React from "react";

import SelectDrop from "./SelectDrop";

const Sites = ({ setForm, formData, navigation }) => {

    const { site } = formData;

    const { next } = navigation;

    return (
        <div className= "col-12 pt-3">
            <h1 className="text-center">
                ComiXtime Scraping
            </h1>
            <div className="form-group">
                <SelectDrop
                    label="Seleziona il sito"
                    name="site"
                    value={site}
                    onChange={setForm}
                    type="sites"
                />
            </div>
            <div className="text-center form-group">
                <button onClick={next} className="btn btn-primary col-md-12 btn-lg">Avanti</button>
            </div>
        </div>
    );
};

export default Sites;