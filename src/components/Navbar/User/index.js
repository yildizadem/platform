import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import profileImage from "./profile-img.jpg";
import "./style.css";

export default function () {
    const [detailOpen, setDetailOpen] = useState(false);

    return (
        <div className="user-profile" onClick={() => setDetailOpen(!detailOpen)}>
            <div className="full-name">Naim Erol Özgüner</div>
            <img src={profileImage} alt="profile-img" className="profile-img" />
            <Icon path={mdiChevronDown} className="arrow-down-icon" color="#7c98b6" />
            {detailOpen && (<div className="menu">
                <div>Profilim</div>
                <div>Adres Defterim</div>
                <div>Ayarlar</div>
                <div>Çıkış Yap</div>
            </div>)}
        </div>
    )
}