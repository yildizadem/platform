import React from "react";
import {mdiFullscreen, mdiInformation, mdiCamera} from "@mdi/js";
import "./style.css"
import "../../index.css"
import profileImg from "./profil_img.png"
import Icon from "@mdi/react";

export default function() {
    return(
        <div className="profile-page">
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
            <div className="body">
                <div className="nav-tabs">

                </div>
                <div className="nav-panels">
                    <div className="pane-settings">
                        <div className="row">
                            <div className="col-12">
                                <span className="nav-panels-header">İBB Veri Portalı kullanıcıları tarafından görünen bilgilerinizi aşağıdaki alandan düzenleyebilirsiniz.</span>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-3">
                                <label className="cbs-label">Cep Telefonu</label>
                                <input type="text" className="cbs-input mt-3" value="0212 449 45 20"/>
                            </div>
                            <div className="col-9">
                                <label className="cbs-label">Adres</label>
                                <input type="text" className="cbs-input mt-3" value="Hacıahmet Mh. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu/İstanbul"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}