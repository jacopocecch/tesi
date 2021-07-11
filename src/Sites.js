import React from "react";

import SelectDrop from "./SelectDrop";

import { useState, useEffect } from 'react';

const Sites = (props) => {

    const { navigation, siteData, setSiteData } = props;

    const { next } = navigation;

    return (
        <div className= "col-12 pt-3">
            <h1 className="text-center">
                ComiXtime Scraping
            </h1>
            <div className="form-group m-2">
                <SelectDrop
                    label="Seleziona il sito"
                    name="site"
                    value={siteData}
                    onChange={(e) => {
                        setSiteData(e.target.value)
                    }}
                    type="sites"
                    div_class="col-md-12 float-left form-group"
                />
            </div>
            <div className="text-center form-group">
                <button onClick={next} className="btn btn-primary col-md-10 btn-lg">Avanti</button>
            </div>
        </div>
    );
};

export default Sites;