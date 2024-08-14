import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
		<RouterProvider router={router}/>
);
