import React from "react";
import ReactDOM from "react-dom";

import MultiStepForm from "./MultiStepForm";

import "./bootstrap-4.3.1-dist/css/bootstrap.min.css";
import "./style.css";

function App() {
    return (
        <div className="interface d-flex justify-content-center align-items-center" style={{padding: "20px"}}>
            <div className="container-fluid div-step border border-dark rounded" style={{padding: "20px", backgroundColor: "white"}}>
                <MultiStepForm />
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);