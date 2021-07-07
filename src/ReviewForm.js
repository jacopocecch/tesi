import React from "react";
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';
import { useForm } from "react-hooks-helper";

import IssueForm from "./IssueForm"

const ReviewForm = (data) => {

	const [reviewData, setReviewData] = useForm(data['data']);
	const props = { reviewData, setReviewData };

	return (
		<>
			{reviewData.map((value, index) => {
				return (
					<IssueForm key={value.id} value={value} index={index} {...props}/>
					);
				})
			}
		</>
	);

};

export default ReviewForm;