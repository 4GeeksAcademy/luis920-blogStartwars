import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-black mb-3">
			<Link to="/">
				<img className="logo-starwars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="logo Starwars" />
			</Link>
			<div className="ml-auto">
					<div class="btn-group">
						<button type="button" className="btn-favorites btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
							Favorites
						</button>
					</div>
			</div>
		</nav>
	);
};

