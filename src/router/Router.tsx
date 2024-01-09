import { createBrowserRouter } from "react-router-dom";
import { AddTask } from "../page/AddTask";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AddTask />,
  },
]);
