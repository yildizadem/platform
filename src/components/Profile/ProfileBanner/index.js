import React from "react";
import profileImg from "./profil_img.png";
import Icon from "@mdi/react";
import "./style.css"
import {mdiCamera, mdiFacebook, mdiLinkedin, mdiTwitter} from "@mdi/js";

export default function() {
    return(
        <div className="profile-banner">
            <img src={profileImg} className="profile_img" alt="profile_img"/>
            <span className="edit-photo c_pointer"><Icon path={mdiCamera} className="camera-icon" color="#7c98b6" /> Fotoğrafı Düzenle</span>
            <div className="user-info">
                <span className="user-name">N. Erol Özgüner</span>
                <span className="user-unit">Bilgi İşlem Daire Başkanlığı</span>
                <span className="user-title">Daire Başkanı</span>
            </div>
            <div className="social-links">
                <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
            </div>
        </div>
    )
}