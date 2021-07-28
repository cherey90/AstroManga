import styled from 'styled-components';
import fondoHome from '../../assets/fondoHome.jpg';

export const HomeStyle3 = styled.div `

	width: 100%;
	height: 700px;
	position: relative;
	overflow: hidden;
	background: url(${fondoHome});
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	z-index: 2;

	&:before {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		transform-origin: left;
		transform: skewY(4deg);
	}

	.honeycomb {
		display: -webkit-box;
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		-webkit-box-pack: center;
				justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0;
		transform: translateY(80px);
	}
	.honeycomb-cell {
		-webkit-box-flex: 0;
				flex: 0 1 250px;
		max-width: 250px;
		height: 137.5px;
		margin: 65.4761904762px 12.5px 25px;
		position: relative;
		padding: 0.5em;
		text-align: center;
		z-index: 1;
		box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
	}
	.honeycomb-cell_title {
		height: 100%;
		display: -webkit-box;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
				flex-direction: column;
		-webkit-box-pack: center;
				justify-content: center;
		-webkit-hyphens: auto;
			-ms-hyphens: auto;
				hyphens: auto;
		word-break: break-word;
		text-transform: uppercase;
		color: #F39200;
		font-weight: 700;
		font-size: 1.75em;
		-webkit-transition: opacity 350ms;
		transition: opacity 350ms;
	}
	.honeycomb-cell_title > small {
		font-weight: 300;
		margin-top: 0.25em;
	}
	.honeycomb-cell_image {
		object-fit: cover;
		object-position: center;
		filter: grayscale(100%);
		
	}
	
	
	.honeycomb-cell::before,
	.honeycomb-cell::after {
		content: '';
	}
	.honeycomb-cell::before, 
	.honeycomb-cell::after, 
	.honeycomb-cell_image {
		top: -50%;
		left: 0;
		width: 100%;
		height: 200%;
		display: block;
		position: absolute;
		-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
				clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		z-index: -1;
	}
	.honeycomb-cell::before {
		background: #fff;
		-webkit-transform: scale(1.055);
				transform: scale(1.055);
	}
	.honeycomb-cell::after {
		background: #111111;
		opacity: 0.7;
		-webkit-transition: opacity 350ms;
		transition: opacity 350ms;
	}
	.honeycomb-cell:hover 
	.honeycomb-cell_title {
		opacity: 0;
	}
	.honeycomb-cell:hover 
	.honeycomb-cell_image
	{
		filter: grayscale(0%);
	}
	.honeycomb-cell:hover::before {
		background: #F39200;
	}
	.honeycomb-cell:hover::after {
		opacity: 0;
	}
	.honeycomb_placeholder {
		display: none;
		opacity: 0;
		width: 250px;
		margin: 0 12.5px;
	}

	/* BOTON DE ENVIO */

	.flex {
		min-height: 50vh;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 5px;
	}
	
	a.bttn {
		color: #F39200;
		text-decoration: none;
		-webkit-transition: 0.3s all ease;
		transition: 0.3s ease all;
	}
	a.bttn:hover {
		color: #FFF;
	}
	a.bttn:focus {
		color: #FFF;
	}

	.bttn {
		font-size: 18px;
		letter-spacing: 2px;
		text-transform: uppercase;
		display: inline-block;
		text-align: center;
		width: 270px;
		font-weight: bold;
		padding: 14px 0px;
		border: 3px solid #F39200;
		border-radius: 2px;
		position: relative;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
	}
	.bttn:before {
		-webkit-transition: 0.5s all ease;
		transition: 0.5s all ease;
		position: absolute;
		top: 0;
		left: 50%;
		right: 50%;
		bottom: 0;
		opacity: 0;
		content: '';
		background-color: #F39200;
		z-index: -2;
	}
	.bttn:hover:before {
		-webkit-transition: 0.5s all ease;
		transition: 0.5s all ease;
		left: 0;
		right: 0;
		opacity: 1;
	}
	.bttn:focus:before {
		transition: 0.5s all ease;
		left: 0;
		right: 0;
		opacity: 1;
	}
	
	@media (max-width: 550px) 
	{
		.honeycomb-cell 
		{
		margin: 81.25px 25px;
		}
	}
	@media (min-width: 550px) and (max-width: 825px) 
	{
		.honeycomb-cell:nth-child(3n) 
		{
		margin-right: calc(50% - 125px);
		margin-left: calc(50% - 125px);
		}
	
		.honeycomb_placeholder:nth-child(3n + 5) 
		{
		display: block;
		}
	}
	@media (min-width: 825px) and (max-width: 1100px) {
		.honeycomb-cell:nth-child(5n + 4) 
		{
		margin-left: calc(50% - 275px);
		}
	
		.honeycomb-cell:nth-child(5n + 5) 
		{
		margin-right: calc(50% - 275px);
		}
	
		.honeycomb_placeholder:nth-child(5n), 
		.honeycomb_placeholder:nth-child(5n + 3) 
		{
		display: block;
		}
	}
	@media (min-width: 1100px) 
	{
		.honeycomb-cell:nth-child(7n + 5) {
		margin-left: calc(50% - 400px);
		}
	
		.honeycomb-cell:nth-child(7n + 7), 
		.honeycomb-cell:nth-child(7n + 5):nth-last-child(2) 
		{
		margin-right: calc(50% - 400px);
		}
	
		.honeycomb_placeholder:nth-child(7n + 7), 
		.honeycomb_placeholder:nth-child(7n + 9), 
		.honeycomb_placeholder:nth-child(7n + 11) 
		{
		display: block;
		}
	}
`;
