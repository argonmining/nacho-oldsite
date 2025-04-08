import styled from 'styled-components';

interface Theme {
	colors: {
		primary: string;
	};
}

export const HeroHeading = styled.h1<{ theme: Theme }>`
	font-size: 4.5rem;
	color: ${(props) => props.theme.colors.primary};
`;
