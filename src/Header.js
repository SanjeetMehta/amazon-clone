import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <input type="text" className="header_searchInput"/>
        </nav>
    );
}

export default Header;
