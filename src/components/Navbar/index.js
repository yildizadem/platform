import React from "react";
import Icon from "@mdi/react";
import Weather from "./Weather";
import User from "./User";
import { mdiMagnify, mdiBellRing } from "@mdi/js";
import "./style.css";

export default function () {
    return (
        <nav className="navbar">
            <div className="search">
                <Icon path={mdiMagnify} size={1} className="search-icon" color="#7c98b6" />
                <input type="text" placeholder="Veri arayın..." />
            </div>
            <Weather />
            <div className="notifications">
                <Icon path={mdiBellRing} size={1} color="#7c98b6" />
            </div>
            <User />
        </nav>
    )
}