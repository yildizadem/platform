import React from "react";
import Icon from "@mdi/react";
import Weather from "./Weather";
import Notifications from "./Notifications"
import { mdiMagnify } from "@mdi/js";
import User from "./User";
import "./style.css";

export default function () {
    return (
        <nav className="navbar">
            <div className="search">
                <Icon path={mdiMagnify} size={1} className="search-icon" color="#7c98b6" />
                <input type="text" placeholder="Veri arayın..." />
            </div>
            <Weather />
            <Notifications/>
            <User/>
        </nav>
    )
}