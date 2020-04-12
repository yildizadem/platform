import React from "react";
import {mdiFullscreen, mdiInformation, mdiCamera} from "@mdi/js";
import "./style.css"
import profileImg from "./profil_img.png"
import Icon from "@mdi/react";

export default function() {
    return(
        <div>
            <div className="header">
                <div className="profile-banner">
                    <img src={profileImg} className="profile_img" alt="profile_img"/>
                    <span className="edit-photo"><Icon path={mdiCamera} className="camera-icon" color="#7c98b6" /> Fotoğrafı Düzenle</span>
                </div>

                <div className="user-info">
                    <span className="user-name">N. Erol Özgüner</span>
                    <span className="user-unit">Bilgi İşlem Daire Başkanlığı</span>
                    <span className="user-title">Daire Başkanı</span>
                </div>
                <div className="card">
                    <div className="card-header">
                        <span>2020 Yılı Toplam Gelirler <Icon path={mdiInformation} className="info-button" color="#7c98b6" /></span>
                        <span className="expand">
                            <Icon path={mdiFullscreen} className="expand-button" color="#7c98b6" />
                        </span>
                    </div>
                    <div className="card-body">
                        <div className="count">246.987.128</div>
                        <div className="rate">↓ 13.8%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}