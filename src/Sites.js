import React from "react";

import SiteDrop from "./SiteDrop";

const Sites = ({ setForm, formData, navigation }) => {

    const { site } = formData;

    const { next } = navigation;

    return (
        <div>
            <div className="form-group">
                <SiteDrop
                    label="Seleziona il sito"
                    name="site"
                    value={site}
                    onChange={setForm}
                />
            </div>
            <div>
                <button onClick={next} className="btn btn-primary">Avanti</button>
            </div>
        </div>
    );
};

export default Sites;