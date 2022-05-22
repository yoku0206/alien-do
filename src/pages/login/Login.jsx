import './Login.scss';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Login = () => {
  	return (
		<div className="login">

			<div className="loginContainer">

				<div className="loginNavbar">
					<div className="loginNavWrapper">

						<Link className="loginNavLink" to="/login">
							<div className="loginNavTitle">
								Alien Do
							</div>
						</Link>
						
						<div className="loginNavItems">

							<div className="loginNavItem">
								<Link className="loginNavLink" to="/">
									<HomeIcon className="icon" />
									<span>回到首頁</span>
								</Link>
							</div>

						</div>

					</div>
				</div>

			</div>

    	</div>
  	)
}

export default Login