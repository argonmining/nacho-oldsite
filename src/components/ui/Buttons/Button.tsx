'use client';
import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

export const Button = styled.button<{ theme: Theme }>`
	font-size: 2rem;
	text-align: center;
	color: ${(props) => props.theme.colors.primary};
`;
