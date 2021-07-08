import React from "react";
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';
import { useForm } from "react-hooks-helper";

import IssueForm from "./IssueForm"

const ReviewForm = (props) => {

	const { data, onChange } = props;

	function handleChange(newValue, index) {
		onChange(newValue, index);
	}

	console.log(data);

	return (
		<>
			{data.map((value, index) => {
				return (
					<IssueForm key={value.id} value={value} index={index} onChange={handleChange}/>
					);
				})
			}
		</>
	);

};

export default ReviewForm;