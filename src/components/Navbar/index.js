import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './navbar.css'

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
			<NavLink to="/" >
        	    Home
        	</NavLink>
			<NavLink to="/Dogs" >
				Dogs
			</NavLink>
			<NavLink to="/contact" >
				Contact
			</NavLink>        
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
