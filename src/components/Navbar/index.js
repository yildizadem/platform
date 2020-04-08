import React from "react";
import Icon from "@mdi/react";
import { mdiMagnify, mdiChevronDown, mdiBellRing } from "@mdi/js";
import ruzgarliIcon from "./ruzgarli-48-px.svg";
import profileImage from "./profile-img.jpg";
import "./style.css";

export default function () {
    return (
        <nav className="navbar">
            <div className="search">
                <Icon path={mdiMagnify} size={1} className="search-icon" color="#7c98b6" />
                <input type="text" placeholder="Veri arayın..." />
            </div>
            <div className="date">06.04.2020, Pazartesi</div>
            <img src={ruzgarliIcon} alt="weather-icon" className="weather-icon" />
            <div className="weather">18 C°</div>
            <Icon path={mdiChevronDown} className="arrow-down-icon" color="#7c98b6" />
            <div className="notifications">
                <Icon path={mdiBellRing} size={1} color="#7c98b6" />
            </div>
            <div className="user-profile">
                <div className="full-name">Naim Erol Özgüner</div>
                <img src={profileImage} alt="profile-img" className="profile-img" />
                <Icon path={mdiChevronDown} className="arrow-down-icon" color="#7c98b6" />
            </div>
        </nav>
    )
}