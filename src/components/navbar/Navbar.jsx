import "./Navbar.scss";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { useState } from "react";
import Dropdown from '../dropdown/Dropdown'

const Navbar = (props) => {

    const currentPath = props.currentPath;
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeft = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

	function NavbarContainer(props) {
		return (
			<nav className="navbar">
				<div className="nav-wrapper">{props.children}</div>
			</nav>
		);
	}

	function NavbarItems(props) {
		return <ul className={click ? "nav-items active" : "nav-items"}>{props.children}</ul>;
	}

	function NavbarItem(props) {
        if (props.path !== undefined) {
            return (
                <li className="nav-item">
                    <Link className={currentPath === props.path ? "nav-link highlight" : "nav-link"} to={props.path} onClick={closeMobileMenu}>
                        {props.children}
                    </Link>
                </li>
            )
        }
		return <li className="nav-item">{props.children}</li>;
	}

	return (
		<NavbarContainer>

			<Link className="navLogo" to="/">
                Alien Do
            </Link>

            <div className="navMobileIcon" onClick={handleClick}>
                {click ? <ImCross /> : <FaBars />}
            </div>

            <NavbarItems>
                <NavbarItem path="/">首頁</NavbarItem>
                <li 
                    className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeft}
                >
                    <Link className={currentPath === props.path ? "nav-link highlight" : "nav-link"} to="/server-list" onClick={closeMobileMenu}>
                    伺服器列表
                    {dropdown && <Dropdown />}
                    </Link>
                </li>
                <NavbarItem path="donact">贊助我們</NavbarItem>
                <NavbarItem path="about">關於我們</NavbarItem>
                <NavbarItem path="contact">聯絡我們</NavbarItem>
            </NavbarItems>

            <Link className="navLogin" to="login">
                登 入
            </Link>

		</NavbarContainer>
	);
};

export default Navbar;
