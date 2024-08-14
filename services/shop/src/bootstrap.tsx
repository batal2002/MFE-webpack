import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import React, {Suspense} from "react";
import {router} from "@/router/Router";

const root = createRoot(document.getElementById("root") as HTMLElement);


root.render(
	<Suspense fallback={"Loading..."}>
		<RouterProvider router={router}/>
	</Suspense>,
);
