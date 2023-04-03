import React from "react";
import ReactDOM from "react-dom/client";
import FirstPersonApp from "./FirstPersonApp";
import FirstPersonApp2 from "./FirstPersonApp2";
import "./index.css";
import PointCloudApp from "./PointCloudApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PointCloudApp />
    {/* <FirstPersonApp2 /> */}
    {/* <FirstPersonApp /> */}
  </React.StrictMode>
);
