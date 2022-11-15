import React from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }: React.PropsWithChildren) => (
	<div>
		<Navigation />
		{children}
		<Footer />
	</div>
);

export default Layout;
