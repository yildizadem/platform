import React from "react";
import Icon from "@mdi/react";
import {mdiEmail, mdiFacebook, mdiLinkedin, mdiPencil, mdiTwitter} from "@mdi/js";
import "./style.css"

export default function () {
    return(
        <div>
            <div className="pane-header">
                <span className="nav-panels-header">İBB Veri Portalı kullanıcıları tarafından görünen bilgilerinizi aşağıdaki alandan düzenleyebilirsiniz.</span>
            </div>
            <div className="row mt-4 ml-4">
                <div className="col-4">
                    <label className="cbs-label">Cep Telefonu</label>
                    <input type="text" className="cbs-input mt-3" defaultValue="0212 449 45 20"/>
                </div>
                <div className="col-8">
                    <label className="cbs-label">Adres</label>
                    <input type="text" className="cbs-input mt-3" defaultValue="Hacıahmet Mh. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu/İstanbul"/>
                </div>
            </div>

            <div className="row">
                <div className="col-4 ml-4">
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
                </div>
                <div className="col-7 mt-3">
                    <div className="col-12 mt-5 d-flex">
                        <Icon path={mdiEmail} size={1} className="grey-text"/>
                        <span className="social-text align-self-center ml-3">erol.ozguner@ibb.gov.tr</span>
                    </div>
                    <div className="col-12 mt-4 d-flex">
                        <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                        <span className="social-text align-self-center ml-3">linkedin.com/in/nerolozguner</span>
                        <Icon path={mdiPencil} size={1} className="grey-text c_pointer"/>
                    </div>
                    <div className="col-12 mt-4 d-flex">
                        <Icon path={mdiFacebook} size={1} className="primary-color-dark"/>
                        <span className="social-text align-self-center ml-3">facebook.com/nerolozguner</span>
                        <Icon path={mdiPencil} size={1} className="grey-text c_pointer"/>
                    </div>
                    <div className="col-12 mt-4 d-flex">
                        <Icon path={mdiTwitter} size={1} className="info-color"/>
                        <span className="social-text align-self-center ml-3">@nerolozguner</span>
                        <Icon path={mdiPencil} size={1} className="grey-text c_pointer"/>
                    </div>
                </div>
            </div>
            <button className="save-button c_pointer">BİLGİLERİ KAYDET</button>
        </div>
    )
}