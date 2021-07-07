import React from "react";
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';
import { useForm } from "react-hooks-helper";

import ItemForm from "./ItemForm"
import SelectDrop from "./SelectDrop"

const IssueForm = ({ value, index, reviewData, setReviewData }) => {	

	return (
		<div className="form-group col-md-12 float-left form-confirm">
			<h3>Albo ID {reviewData[index].id}</h3>
			{typeof value.info.title !== 'undefined' && 
				<ItemForm
	                label="Titolo"
	                name={index + ".info.title"}
	                type="text"
	                value={value.info.title}
	                onChange={setReviewData}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof value.info.subtitle !== 'undefined' && 
				<ItemForm
	                label="Sottotitolo"
	                name={index + ".info.subtitle"}
	                type="text"
	                value={value.info.subtitle}
	                onChange={setReviewData}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof value.info.release_date !== 'undefined' && 
				<ItemForm
	                label="Data di uscita"
	                name={index + ".info.release_date"}
	                type="date"
	                value={value.info.release_date}
	                onChange={setReviewData}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof value.info.cover_price !== 'undefined' && 
           		typeof value.info.cover_price_currency !== 'undefined' && (
           		<>	
           			<label className="form-check-label ml-3"><b>Prezzo copertina:</b></label>
		       		<div className="form-group form-check">
		       			<label className="form-check-label"><b>Valuta</b></label>
		       			<ItemForm
		                    label="&euro;"
		                    name={index + ".info.cover_price_currency"}
		                    type="radio"
		                    value='EUR'
		                    defaultChecked={value.info.cover_price_currency === 'EUR'}
		                    onChange={setReviewData}
		                    div_class="form-check"
		                />
		                <ItemForm
		                    label="&#8356;"
		                    name={index + ".info.cover_price_currency"}
		                    type="radio"
		                    value='LIT'
		                    defaultChecked={value.info.cover_price_currency === 'LIT'}
		                    onChange={setReviewData}
		                    div_class="form-check "
		                />
		            </div>
					<ItemForm
			            label="Prezzo"
			            name={index + ".info.cover_price"}
			            type="text"
			            value={value.info.cover_price}
			            onChange={setReviewData}
			            div_class="col-md-12 float-left form-group"
		        	/>
		       	</>
            	)
           	}
			{typeof value.info.description !== 'undefined' && 
				<ItemForm
	                label="Descrizione"
	                name={index + ".info.description"}
	                type="textarea"
	                value={value.info.description}
	                onChange={setReviewData}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof value.info.isbn !== 'undefined' && 
				<ItemForm
	                label="ISBN"
	                name={index + ".info.isbn"}
	                type="text"
	                value={value.info.isbn}
	                onChange={setReviewData}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof value.info.pages !== 'undefined' && 
				<ItemForm
	                label="Pagine"
	                name={index + ".info.pages"}
	                type="text"
	                value={value.info.pages}
	                onChange={setReviewData}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof value.info.width !== 'undefined' && 
           		typeof value.info.height !== 'undefined' && (
           	    <>
					<ItemForm
		                label="Altezza"
		                name={index + ".info.height"}
		                type="text"
		                value={value.info.height}
		                onChange={setReviewData}
		                div_class="col-md-12 float-left form-group"
	            	/>
	            	<ItemForm
		                label="Larghezza"
		                name={index + ".info.width"}
		                type="text"
		                value={value.info.width}
		                onChange={setReviewData}
		                div_class="col-md-12 float-left form-group"
	            	/>
	            </>
	            )
           	}
           	{typeof value.info.id_color !== 'undefined' && 
				<SelectDrop
                    label="Colore"
                    name={index + ".info.id_color"}
                    value={value.info.id_color}
                    onChange={setReviewData}
                    type="colors"
                />
           	}
           	{typeof value.info.id_binding !== 'undefined' && 
				<SelectDrop
                    label="Rilegatura"
                    name={index + ".info.id_binding"}
                    value={value.info.id_binding}
                    onChange={setReviewData}
                    type="bindings"
                />
           	}
           	{typeof value.image !== 'undefined' && 
           		<div className="form-group">
					<ItemForm
		                label="Copertina"
		                name={index + ".image.image"}
		                type="text"
		                value={value.image.image}
		                onChange={setReviewData}
		                div_class="col-md-12 float-left form-group"
	            	/>
	            	<img
	            		src={value.image.image}
	            		width="200px"
	            		className="col-md-3"
	            	/>
            	</div>
           	}
		</div>
	);

};

export default IssueForm;