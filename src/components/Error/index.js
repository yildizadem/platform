import React from "react";
import { Link } from 'react-router-dom';
import errorImg from "./error-page-illustration.svg";
import "./style.css";

export default function() {
    return(
        <div>
            <span className="error-number">404</span>
            <div className="error-text">
                <span>Sayfa bulunamadı, özür dileriz.</span><br/>
                <span>Hata ile ilgili ekiplerimizi bilgilendirdik.</span>
            </div>
            <Link to="/">
                <button className="error-button"><span>ANASAYFAYA GİT</span></button>
            </Link>
            <img src={errorImg} className="Error-Page-Illustration" alt="error"/>
            <div className="footer">
                <span className="footer-text">İstanbul Büyükşehir Belediyesi Coğrafi Bilgi Sistemi Müdürlüğü</span><br/>
                <span className="footer-text">2020</span>
            </div>
        </div>
    )
}