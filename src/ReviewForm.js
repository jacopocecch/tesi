import React from "react";
import { useAxios } from "./useAxios";
import { useState, useEffect } from 'react';
import { useForm } from "react-hooks-helper";

const ReviewForm = (data) => {

	const [reviewData, setReviewData] = useForm(data['data']);
	
	return (
		<ul>
			{reviewData.map((value, index) => {
				console.log(value, index);
			})}
		</ul>
	);
};

export default ReviewForm;