import React from "react";
import ReactDOM from "react-dom";

import MultiStepForm from "./MultiStepForm";

import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="app">
            <div className="container-fluid">
                <MultiStepForm />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);