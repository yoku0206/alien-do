import React from "react";
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom';

const Home = (props) => {

    const usePathname = () => {
		const location = useLocation();
		return location.pathname;
	}

	return (
        <div className="home">

            <Navbar currentPath={usePathname()} />

        </div>
    );
};

export default Home;
