import styled from 'styled-components';

const Button = styled.a`
color: var(--white);
border: 2px solid var(--white);
background-color: rgba(0, 0, 0, 0);
box-sizing: border-box;
cursor: pointer;
padding: 16px 24px;
font-style: normal;
font-weight: bold;
font-size: 16px;
outline: none;
border-radius: 10px;
text-decoration: none;
display: inline-block;
transition: opacity .3s;

&:hover,
&:focus {
background-color: var(--primary);
transition: 0.4s;
`;

export default Button;
