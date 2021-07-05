import React from "react";

const ItemForm = ({ label, children, type = "text", div_class, ...otherProps }) => (
    <div className={div_class}>
        {type === "text" ? (
            <>
                <label><b>{label}</b></label>
                <input type={type} {...otherProps} className="form-control"/>
            </>
        ) : (
            <>
                <label className="form-check-label"/>
                <input className="form-check-input" type={type} {...otherProps} />
                {label}
            </>
        )}
    </div>
);

export default ItemForm;