import {Link, Outlet} from "react-router-dom";
import {adminRoutes} from '@packages/shared/src/routes/admin'
import {shopRoutes} from '@packages/shared/src/routes/shop'

export const App = () => {


	return (
		<div>
			<h1>page</h1>
			<Link to={adminRoutes.about}>ABOUT</Link>
			<br/>
			<Link to={shopRoutes.main}>SHOP</Link>
			<Outlet/>
		</div>
	);
};
