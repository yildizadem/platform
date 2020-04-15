import React, {useState} from "react";
import {
    mdiFullscreen,
    mdiInformation,
    mdiCamera,
    mdiEmail,
    mdiLinkedin,
    mdiFacebook,
    mdiTwitter,
    mdiPencil,
} from "@mdi/js";
import "./style.css"
import "../../index.css"
import profileImg from "./profil_img.png"
import Icon from "@mdi/react";

export default function() {
    const [activeTab, setActiveTab] = useState(1);
    return(
        <div className="profile-page">
                <div className="profile-banner">
                    <img src={profileImg} className="profile_img" alt="profile_img"/>
                    <span className="edit-photo c_pointer"><Icon path={mdiCamera} className="camera-icon" color="#7c98b6" /> Fotoğrafı Düzenle</span>
                    <div className="user-info">
                        <span className="user-name">N. Erol Özgüner</span>
                        <span className="user-unit">Bilgi İşlem Daire Başkanlığı</span>
                        <span className="user-title">Daire Başkanı</span>
                    </div>
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
            <div className="body mt-1">
                <div className="nav-tabs mt-5">
                    <div className="tab" onClick={() => setActiveTab(1)}>
                        <span className="tab-title">PROFİL BİLGİLERİ</span>
                        <span className={activeTab === 1 ? "line-profile active" : "line-profile"}/>
                    </div>
                    <div className="tab mt-4" onClick={() => setActiveTab(2)}>
                        <span className="tab-title">ADRES DEFTERİ</span>
                        <span className={activeTab === 2 ? "line-address active" : "line-address"}/>
                    </div>
                    <div className="tab mt-4">
                        <span className="tab-title">PORTAL VERİ AYARLARI</span>
                    </div>
                </div>
                <div className="nav-panels">
                    <div className={activeTab === 1 ? "pane-settings active" : "pane-settings"}>
                        <div className="row">
                            <div className="col-12">
                                <span className="nav-panels-header">İBB Veri Portalı kullanıcıları tarafından görünen bilgilerinizi aşağıdaki alandan düzenleyebilirsiniz.</span>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-3">
                                <label className="cbs-label">Cep Telefonu</label>
                                <input type="text" className="cbs-input mt-3" defaultValue="0212 449 45 20"/>
                            </div>
                            <div className="col-9">
                                <label className="cbs-label">Adres</label>
                                <input type="text" className="cbs-input mt-3" defaultValue="Hacıahmet Mh. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu/İstanbul"/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <div className="col-12 profile-textbox">
                                    <label className="cbs-label">Telefon</label>
                                    <input type="text" className="cbs-input mt-3" defaultValue="0212 449 45 20"/>
                                </div>
                                <div className="col-12 profile-textbox">
                                    <label className="cbs-label">Santral</label>
                                    <input type="text" className="cbs-input mt-3" defaultValue="0212 449 00 00"/>
                                </div>
                                <div className="col-12 profile-textbox">
                                    <label className="cbs-label">Fax</label>
                                    <input type="text" className="cbs-input mt-3" defaultValue="0212 449 50 20"/>
                                </div>
                                <div className="col-12 profile-textbox">
                                    <span className="change-password c_pointer"><u>Şifre Değiştir</u></span>
                                </div>
                            </div>
                            <div className="col-9 mt-3">
                                <div className="col-12 mt-5 d-flex">
                                    <Icon path={mdiEmail} size={1} className="grey-text"/>
                                    <span className="social-text align-self-center ml-3">erol.ozguner@ibb.gov.tr</span>
                                </div>
                                <div className="col-12 mt-3 d-flex">
                                    <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                                    <span className="social-text align-self-center ml-3">linkedin.com/in/nerolozguner</span>
                                    <Icon path={mdiPencil} size={1} className="grey-text c_pointer"/>
                                </div>
                                <div className="col-12 mt-3 d-flex">
                                    <Icon path={mdiFacebook} size={1} className="primary-color-dark"/>
                                    <span className="social-text align-self-center ml-3">facebook.com/nerolozguner</span>
                                    <Icon path={mdiPencil} size={1} className="grey-text c_pointer"/>
                                </div>
                                <div className="col-12 mt-3 d-flex">
                                    <Icon path={mdiTwitter} size={1} className="info-color"/>
                                    <span className="social-text align-self-center ml-3">@nerolozguner</span>
                                    <Icon path={mdiPencil} size={1} className="grey-text c_pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={activeTab === 2 ? "pane-notebook active" : "pane-notebook"}>
                    </div>
                </div>
            </div>
        </div>
    )
}