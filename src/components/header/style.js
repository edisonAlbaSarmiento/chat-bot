import styled from 'styled-components';

export const Contenedor = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgb(225, 44, 55);;
	display:flex;
	justify-content: space-between;
	
`;

export const ContenedorLogo = styled.div`
	margin: 20px 10px 10px 0; 
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-around;
	align-items: center;	
	color: white;
`;

export const ContenedorMenu = styled.div`
	margin: 60px 100px 0 0; 
	display: flex;
	height: 100%;
	width: 100%;	
	align-items: center;	
	
`;

export const ContenedorLinea = styled.a`

	justify-content: space-around;
	border-top:1px solid transparent;
	border-bottom: 1px solid transparent;
	transition: 0.7s ease-out;
	text-decoration: none;
	color: white;
	position: relative;
	list-style: none outside;
	word-spacing: 70pt; 
	font-weight: bold;
	


`;
