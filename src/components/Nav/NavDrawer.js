import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import DrawerList from './DrawerList';

const StyledDrawer = styled.div`
	position: fixed;
	display: none;
	background-color: ${({ theme }) => theme.color.bg};
	border: ${({ theme }) => theme.color.primary} 10px solid;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 3;
	opacity: 0;
	pointer-events: none;
	transition: 300ms opacity ease-in-out,
		${({ theme }) => theme.hoverTransition};
	justify-content: center;
	align-items: center;

	&.drawer-open {
		opacity: 1;
		pointer-events: all;
	}

	${media.down.md} {
		display: flex;
	}
`;

const StyledNav = styled.nav`
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	padding: 0;
`;

const NavDrawer = ({ drawOpen, colorTheme, toggleTheme }) => {
	return (
		<StyledDrawer className={drawOpen ? 'drawer-open' : ''}>
			<StyledNav>
				<DrawerList colorTheme={colorTheme} toggleTheme={toggleTheme} />
			</StyledNav>
		</StyledDrawer>
	);
};

export default NavDrawer;