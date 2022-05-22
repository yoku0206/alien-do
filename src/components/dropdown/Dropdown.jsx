import { MenuItem } from './DropdownMenuItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Dropdown.scss';

const Dropdown = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? "dropdown-menu clicked" : "dropdown-menu"}
            >

                {MenuItem.map((item, index) => {
                    return (
                        <li className="dropdown-item" key={index}>
                            <Link 
                                className="dropdown-link"
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </>
    )
}


export default Dropdown