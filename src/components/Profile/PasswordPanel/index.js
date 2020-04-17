import React from "react";
import "./style.css"

export default function () {
    return(
        <div>
            <div className="pane-header">
                <span className="nav-panels-header">Şifrenizi değiştirin.</span>
            </div>
            <div className="row mt-5 ml-5">
                <div className="col-5">
                    <label className="cbs-label">Eski Şifre</label>
                    <input type="password" className="cbs-input mt-3" defaultValue="12345678"/>
                </div>
                <div className="col-5">
                    <label className="cbs-label">Yeni Şifre</label>
                    <input type="password" className="cbs-input mt-3" defaultValue="12345678"/>
                </div>
            </div>
            <div className="row mt-5 ml-5">
                <div className="col-5"/>
                <div className="col-5">
                    <label className="cbs-label">Yeni Şifre Tekrar</label>
                    <input type="password" className="cbs-input mt-3" defaultValue="12345678"/>
                </div>
            </div>
            <div className="row mt-5 ml-5">
                <div className="col-5"/>
                <div className="col-5">
                    <button className="password-button c_pointer">ŞİFREYİ KAYDET</button>
                </div>
            </div>
        </div>
    )
}