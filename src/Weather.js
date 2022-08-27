import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { Bars } from "react-loader-spinner";

export default function Weather(props) {
	function handleResponse(response) {
		alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
	}
	let apiKey = `a2e58143d5353df7726302c2856b0fb6`;
	let urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
	axios.get(urlApi).then(handleResponse);

	return (
		<div>
			<Audio
				height="80"
				width="80"
				radius="9"
				color="grey"
				ariaLabel="three-dots-loading"
				wrapperStyle
				wrapperClass
			/>
			<Bars
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="bars-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
}
