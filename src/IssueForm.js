import React from "react";
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';
import { useForm } from "react-hooks-helper";

import ItemForm from "./ItemForm"
import SelectDrop from "./SelectDrop"

const IssueForm = (props) => {	

	const { value, index, onChange } = props;

	const [title, setTitle] = useState(undefined);
	const [subtitle, setSubtitle] = useState(undefined);
	const [releaseDate, setReleaseDate] = useState(undefined);
	const [coverPrice, setCoverPrice] = useState(undefined);
	const [coverPriceCurrency, setCoverPriceCurrency] = useState(undefined);
	const [description, setDescription] = useState(undefined);
	const [isbn, setIsbn] = useState(undefined);
	const [pages, setPages] = useState(undefined);
	const [height, setHeight] = useState(undefined);
	const [width, setWidth] = useState(undefined);
	const [color, setColor] = useState(undefined);
	const [binding, setBinding] = useState(undefined);
	const [image, setImage] = useState(undefined);
	const [authors, setAuthors] = useState([]);
	const [personas, setPersonas] = useState([]);


	useEffect(() => {
		if(value.info){
			setTitle(value.info.title);
			setSubtitle(value.info.subtitle);
			setReleaseDate(value.info.release_date);
			setCoverPrice(value.info.cover_price);
			setCoverPriceCurrency(value.info.cover_price_currency);
			setDescription(value.info.description);
			setIsbn(value.info.isbn);
			setPages(value.info.pages);
			setHeight(value.info.height);
			setWidth(value.info.width);
			setColor(value.info.id_color);
			setBinding(value.info.id_binding);
			setAuthors(value.info.id_authors ? value.info.id_authors : []);
			setPersonas(value.info.id_personas ? value.info.id_personas : []);
		}
		if(value.image){
			setImage(value.image.image);
		}
	}, [value])

	useEffect(() => {
		onChange({
			id: value.id,
			number: value.number,
			series: value.series,
			title: value.title,
			update: value.update,
			info: {
				title: title,
				subtitle: subtitle,
				release_date: releaseDate,
				cover_price: coverPrice,
				cover_price_currency: coverPriceCurrency,
				description: description,
				isbn: isbn,
				pages: pages,
				height: height,
				width: width,
				id_color: color,
				id_binding: binding,
				id_authors: authors,
				id_personas: personas
				},
			image: {
				image: image,
				remove_image: false
				}
			}
			, index);
	}, [title, subtitle, releaseDate, coverPrice, coverPriceCurrency, description, isbn, pages, height, width, color, binding, authors, personas, image])

	function removeAuthor(index){

		var array = [...authors];
		array.splice(index, 1);
		setAuthors(array);
	}

	function removePersona(index){

		var array = [...personas];
		array.splice(index, 1);
		setPersonas(array);
	}

	function changeRole(role, index){

		var array = [...authors];
		array[index]['id_role'] = role;
		setAuthors(array);
	}

	return (
		<div className="form-group col-md-12 float-left form-confirm">
			<h3>{value.title} (ID {value.id})</h3>
			{typeof title !== 'undefined' && 
				<ItemForm
	                label="Titolo"
	                name='title'
	                type="text"
	                value={title}
	                onChange={(e) => {
	                	setTitle(e.target.value)
	                }}
	                div_class="col-md-12 float-left form-group"
            	/>
            }
           	{typeof subtitle !== 'undefined' && 
				<ItemForm
	                label="Sottotitolo"
	                name='subtitle'
	                type="text"
	                value={subtitle}
	                onChange={(e) => {
	                	setSubtitle(e.target.value)
	                }}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof releaseDate !== 'undefined' && 
				<ItemForm
	                label="Data di uscita"
	                name='release_date'
	                type="date"
	                value={releaseDate}
	                onChange={(e) => {
	                	setReleaseDate(e.target.value)
	                }}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof coverPrice !== 'undefined' && 
           		typeof coverPriceCurrency !== 'undefined' && (
           		<>	
           			<label className="form-check-label ml-3"><b>Prezzo copertina:</b></label>
		       		<div className="form-group form-check">
		       			<label className="form-check-label"><b>Valuta</b></label>
		       			<ItemForm
		                    label="&euro;"
		                    name='cover_price_currency'
		                    type="radio"
		                    value='EUR'
		                    checked={coverPriceCurrency === 'EUR'}
		                    onChange={(e) => {
			                	setCoverPriceCurrency(e.target.value)
			                }}
		                    div_class="form-check"
		                />
		                <ItemForm
		                    label="&#8356;"
		                    name='cover_price_currency'
		                    type="radio"
		                    value='LIT'
		                    checked={coverPriceCurrency === 'LIT'}
		                    onChange={(e) => {
			                	setCoverPriceCurrency(e.target.value)
			                }}
		                    div_class="form-check "
		                />
		            </div>
					<ItemForm
			            label="Prezzo"
			            name='cover_price'
			            type="text"
			            value={coverPrice}
			            onChange={(e) => {
		                	setCoverPrice(e.target.value)
		                }}
			            div_class="col-md-12 float-left form-group"
		        	/>
		       	</>
            	)
           	}
			{typeof description !== 'undefined' && 
				<ItemForm
	                label="Descrizione"
	                name='description'
	                type="textarea"
	                value={description}
	                onChange={(e) => {
	                	setDescription(e.target.value)
	                }}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof isbn !== 'undefined' && 
				<ItemForm
	                label="ISBN"
	                name='isbn'
	                type="text"
	                value={isbn}
	                onChange={(e) => {
	                	setIsbn(e.target.value)
	                }}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof pages !== 'undefined' && 
				<ItemForm
	                label="Pagine"
	                name="pages"
	                type="text"
	                value={pages}
	                onChange={(e) => {
	                	setPages(e.target.value)
	                }}
	                div_class="col-md-12 float-left form-group"
            	/>
           	}
           	{typeof width !== 'undefined' && 
           		typeof height !== 'undefined' && (
           	    <>
					<ItemForm
		                label="Altezza"
		                name="height"
		                type="text"
		                value={height}
		                onChange={(e) => {
		                	setHeight(e.target.value)
		                }}
		                div_class="col-md-12 float-left form-group"
	            	/>
	            	<ItemForm
		                label="Larghezza"
		                name="width"
		                type="text"
		                value={width}
		                onChange={(e) => {
		                	setWidth(e.target.value)
		                }}
		                div_class="col-md-12 float-left form-group"
	            	/>
	            </>
	            )
           	}
           	{typeof color !== 'undefined' && 
				<SelectDrop
                    label="Colore"
                    name="id_color"
                    value={color}
                    onChange={(e) => {
	                	setColor(e.target.value)
	                }}
                    type="colors"
                    div_class="col-md-12 float-left form-group"
                />
           	}
           	{typeof binding !== 'undefined' && 
				<SelectDrop
                    label="Rilegatura"
                    name="id_binding"
                    value={binding}
                    onChange={(e) => {
	                	setBinding(e.target.value)
	                }}
                    type="bindings"
                    div_class="col-md-12 float-left form-group"
                />
           	}
           	{authors.length > 0 && 
           		<div className="col-md-12 float-left form-group">
           		<label><b>Autori</b></label>
				{authors.map((author, index) => {
					return (
						<div key={index}>
							<ItemForm
				                name={"id_authors.name."+index}
				                type="text"
				                readOnly
				                value={author.name}
				                /*onChange={(e) => {
				                	setAuthors(e.target.value)
				                }}*/
				                div_class="col-md-6 float-left form-group"
			            	/>
			            	<SelectDrop
			                    name={"id_authors.role."+index}
			                    value={author.id_role}
			                    onChange={(e) => {
				                	changeRole(e.target.value, index)
				                }}
			                    type="roles"
			                    div_class="col-md-5 float-left form-group"
			                />
			                <div className="form-group float-left mt-4">
				                <button className="btn btn-outline-secondary" onClick={() => removeAuthor(index)}>
				                	-
				                </button>
				            </div>
			            </div>
			        )}
			    )}
		        </div>
			}
			{personas.length > 0 && 
           		<div className="col-md-12 float-left form-group">
           		<label><b>Personaggi</b></label>
				{personas.map((persona, index) => {
					return (
						<div key={index}>
							<ItemForm
				                name={"id_personas.name."+index}
				                type="text"
				                readOnly
				                value={persona.name}
				                /*onChange={(e) => {
				                	setAuthors(e.target.value)
				                }}*/
				                div_class="col-md-11 float-left form-group"
			            	/>
			                <div className="form-group float-left mt-4">
				                <button className="btn btn-outline-secondary" onClick={() => removePersona(index)}>
				                	-
				                </button>
				            </div>
			            </div>
			        )}
			    )}
		        </div>
			}
           	{typeof value.image !== 'undefined' && 
           		<div className="form-group">
					<ItemForm
		                label="Copertina"
		                name="image"
		                type="text"
		                value={image}
		                onChange={(e) => {
		                	setImage(e.target.value)
		                }}
		                div_class="col-md-12 float-left form-group"
	            	/>
	            	<img
	            		src={image}
	            		width="200px"
	            		className="col-md-3"
	            	/>
            	</div>
           	}
		</div>
	);

};

export default IssueForm;