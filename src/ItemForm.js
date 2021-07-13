import React from "react";

const ItemForm = ({ label, children, type = "text", div_class, error, ...otherProps }) => (
    <div className={div_class}>
        {(type === "text" || type === "date") ? (
            <>
                <label><b>{label}</b></label>
                <input type={type} {...otherProps} className="form-control"/>
                <span className="text-danger">{error}</span>
            </>
        ) : (type === "textarea") ? (
            <>
                <label><b>{label}</b></label>
                <textarea type={type} {...otherProps} className="form-control" rows="7"/>
            </>
        ) : (
            <>
                <input className="form-check-input" type={type} {...otherProps} />
                <label className="form-check-label">{label}</label>
            </>
        )}
    </div>
);

export default ItemForm;