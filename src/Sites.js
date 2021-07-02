import React from "react";

import SiteDrop from "./SiteDrop";

const Sites = ({ setForm, formData, navigation }) => {

    const { site } = formData;

    const { next } = navigation;

    return (
        <div className="form">
            <SiteDrop
                label="Seleziona il sito"
                name="site"
                value={site}
                onChange={setForm}
            />
            <div>
                <button onClick={next}>Avanti</button>
            </div>
        </div>
    );
};

export default Sites;