import styled from 'styled-components';
import fondoHome from '../../assets/fondoHome.jpg';

import cat1 from '../../assets/5702.png';
import cat2 from '../../assets/570.png';

export const HomeStyle = styled.div `
	width: 100%;
	height: 650px;
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
		top: 100%;
		left: -50%;
		width: 100%;
		height: 100%;
		background: #fff;
		transform-origin: right;
		transform: skewY(8deg);
	}

	&:after {
		content: '';
		position: absolute;
		top: 100%;
		right: -50%;
		width: 100%;
		height: 100%;
		background: #fff;
		transform-origin: left;
		transform: skewY(-8deg);
	}

	.box1 {
		width: 560px;
		height: 570px;
		background-image: url(${cat1});
		position: relative;
		bottom: -100%;
		left: 30%;
		animation: anim 2s forwards, anim2 3s forwards 3s;
	}

	.box1:after {
		content: '';
		position: absolute;
		width: 560px;
		height: 570px;
		background-image: url(${cat2});
		left: 0px;
		z-index: -1;
	}

	@keyframes anim {
		from {
			bottom: -100%;
		}
		to {
			bottom: 0%;
		}
	}

	@keyframes anim2 {
		from {
			left: 30%;
			width: 530px;
		}
		to {
			width: 0px;
			left: 50%;
		}
	}

	.box2 {
		width: auto;
		height: auto;
		font-family: 'Special Elite', 'normal';
		color: #000;
		font-size: 10em;
		font-weight: 500;
		line-height: 130px;
		position: absolute;
		top: 250px;
		left: 100px;
		overflow: hidden;
	}

	.text, .text2 {
		position: relative;
		left: -100%;
		animation: anim3 2s forwards 3s;
		margin-top: 16px;
		display: flex;
	}

	.text span {
		color: #F39200;
		background: #000;
	}
	@keyframes anim3 {
		from {
			left: -100%;
		}
		to {
			left: 0%;
		}
	}

	.textGhost {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.textGhost p {
		font-family: 'Righteous';
		font-size: 20px;
		color: #F39200;
		text-align: center;
		display: flex;
	}

	.textGhost p span {
		transition: 1.5s;
	}

	.textGhost p:hover span {
		filter: blur(20px);
		opacity: 0;
		transform: scale(2);
	}

	.textGhost p span:nth-child(10n+1) {
		transition-delay: 0s;
	}

	.textGhost p span:nth-child(10n+2) {
		transition-delay: 0.1s;
	}

	.textGhost p span:nth-child(10n+3) {
		transition-delay: 0.2s;
	}

	.textGhost p span:nth-child(10n+4) {
		transition-delay: 0.3s;
	}

	.textGhost p span:nth-child(10n+5) {
		transition-delay: 0.4s;
	}

	.textGhost p span:nth-child(10n+6) {
		transition-delay: 0.5s;
	}

	.textGhost p span:nth-child(10n+7) {
		transition-delay: 0.6s;
	}

	.textGhost p span:nth-child(10n+8) {
		transition-delay: 0.7s;
	}

	.textGhost p span:nth-child(10n+9) {
		transition-delay: 0.8s;
	}

	.textGhost p span:nth-child(10n+10) {
		transition-delay: 0.9s;
	}

	@media (max-width: 768px) {
		/* background: url(${fondoHome}); */
		background-image: url(${cat1});
	}
`;


export const HomeStyle2 = styled.div `

	height: auto;
	padding: 100px;
	box-sizing: border-box;

	.TitleHome {
		display: flex;
	}

	.TitleHome h1 {
		margin: 50px 0 20px;
		padding: 0;
		font-family: 'Righteous';
		color: #262626;
		font-size: 48px;
	}

	.TitleHome span {
		color: #F39200;
		background: #000;
	}

	.TitleHome img {
		width: 70px;
		height: 100px;
	}

	.Home2 p {
		margin: 0;
		padding: 0;
		font-family: 'Righteous';
		color: #262626;
		font-size: 20px;
	}

	
`;
