import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import BuildingManagement from "./routes/BuildingManagement";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";

import RoomDetail from "./routes/RoomDetail";
import UploadRoom from "./routes/UploadRoom";

import ReactDraft from "./routes/ReactDraft";

// ReactDraft

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "rooms/:roomPk",
                element: <RoomDetail />,
            },
            {
                path: "rooms/upload",
                element: <UploadRoom />,
            },
            {
                path: "/building_management",
                element: <BuildingManagement />,
            },
            {
                path:"/test/react-draft",
                element: <ReactDraft />
            }
        ],
    },
]);

export default router;
