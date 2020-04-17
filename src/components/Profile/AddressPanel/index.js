import React, {useState} from "react";
import "./style.css"
import Icon from "@mdi/react";
import {mdiFacebook, mdiLinkedin, mdiStar, mdiTwitter, mdiStarOutline} from "@mdi/js";
import YavuzErkut from "./yavuz_erkut.png"
import KadriyeKasapoglu from "./kadriye_kasapoglu.png"
import MeltemSisli from "./meltem_sisli.png"
import GurkanAlpay from "./gurkan_alpay.png"


export default function () {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <div>
            <div className="pane-header">
                <div className="nav-panels-header">
                    <div className="nav-tabs-notebook">
                        <div className={activeTab === 1 ? "nav-tabs-notebook-item active" : "nav-tabs-notebook-item"}>
                            <span className="favourites" onClick={() => setActiveTab(1)}>FAVORİLER</span>
                            <span className="address-separator"/>
                        </div>
                        <div className={activeTab === 2 ? "nav-tabs-notebook-item active" : "nav-tabs-notebook-item"}>
                            <span className="all" onClick={() => setActiveTab(2)}>TÜMÜ</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="address-nav-panel">
                <div className={activeTab === 1 ? "favourites-pane active" : "favourites-pane"}>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStar} size={1} className="favourite-icon"/>
                            <img src={YavuzErkut} className="profile-img-address" alt="Yavuz Erkut"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Yavuz ERKUT</span>
                            <span className="address-profile-title">Genel Sekreter</span>
                            <span className="address-profile-unit"/>
                            <span className="address-profile-mail">yavuz.erkut@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">İstanbul Büyükşehir Belediye Başkanlığı Kemalpaşa Mah. 15 Temmuz Şehitleri Cad. No:5 34134 FATİH/İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStar} size={1} className="favourite-icon"/>
                            <img src={KadriyeKasapoglu} className="profile-img-address" alt="Kadriye Kasapoğlu"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Kadriye KASAPOĞLU</span>
                            <span className="address-profile-title">Özel Kalem Müdürü</span>
                            <span className="address-profile-unit"/>
                            <span className="address-profile-mail">kadriye.kasapoglu@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">İstanbul Büyükşehir Belediye Başkanlığı Kemalpaşa Mah. 15 Temmuz Şehitleri Cad. No:5 34134 FATİH/İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStar} size={1} className="favourite-icon"/>
                            <img src={MeltemSisli} className="profile-img-address" alt="Yeşim Meltem Şişli"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Yeşim Meltem ŞİŞLİ</span>
                            <span className="address-profile-title">Genel Sekreter Yardımcısı</span>
                            <span className="address-profile-unit">Bilgi İşlem Daire Başkanlığı</span>
                            <span className="address-profile-mail">meltem.sisli@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">Hacııahmet Mah. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu / İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStar} size={1} className="favourite-icon"/>
                            <img src={GurkanAlpay} className="profile-img-address" alt="Arif Gürkan Alpy"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Arif Gürkan ALPAY</span>
                            <span className="address-profile-title">Daire Başkanı</span>
                            <span className="address-profile-unit">Satın Alma Daire Başkanlığı</span>
                            <span className="address-profile-mail">gurkan.alpay@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">Hacııahmet Mah. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu / İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStar} size={1} className="favourite-icon"/>
                            <img src={GurkanAlpay} className="profile-img-address" alt="Arif Gürkan Alpy"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Arif Gürkan ALPAY</span>
                            <span className="address-profile-title">Daire Başkanı</span>
                            <span className="address-profile-unit">Satın Alma Daire Başkanlığı</span>
                            <span className="address-profile-mail">gurkan.alpay@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">Hacııahmet Mah. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu / İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                </div>
                <div className={activeTab === 2 ? "all-pane active" : "all-pane"}>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStarOutline} size={1} className="favourite-icon"/>
                            <img src={MeltemSisli} className="profile-img-address" alt="Yeşim Meltem Şişli"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Yeşim Meltem ŞİŞLİ</span>
                            <span className="address-profile-title">Genel Sekreter Yardımcısı</span>
                            <span className="address-profile-unit">Bilgi İşlem Daire Başkanlığı</span>
                            <span className="address-profile-mail">meltem.sisli@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">Hacııahmet Mah. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu / İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStarOutline} size={1} className="favourite-icon"/>
                            <img src={GurkanAlpay} className="profile-img-address" alt="Arif Gürkan Alpy"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Arif Gürkan ALPAY</span>
                            <span className="address-profile-title">Daire Başkanı</span>
                            <span className="address-profile-unit">Satın Alma Daire Başkanlığı</span>
                            <span className="address-profile-mail">gurkan.alpay@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">Hacııahmet Mah. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu / İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStarOutline} size={1} className="favourite-icon"/>
                            <img src={YavuzErkut} className="profile-img-address" alt="Yavuz Erkut"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Yavuz ERKUT</span>
                            <span className="address-profile-title">Genel Sekreter</span>
                            <span className="address-profile-unit"/>
                            <span className="address-profile-mail">yavuz.erkut@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">İstanbul Büyükşehir Belediye Başkanlığı Kemalpaşa Mah. 15 Temmuz Şehitleri Cad. No:5 34134 FATİH/İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStarOutline} size={1} className="favourite-icon"/>
                            <img src={KadriyeKasapoglu} className="profile-img-address" alt="Kadriye Kasapoğlu"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Kadriye KASAPOĞLU</span>
                            <span className="address-profile-title">Özel Kalem Müdürü</span>
                            <span className="address-profile-unit"/>
                            <span className="address-profile-mail">kadriye.kasapoglu@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">İstanbul Büyükşehir Belediye Başkanlığı Kemalpaşa Mah. 15 Temmuz Şehitleri Cad. No:5 34134 FATİH/İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                    <div className="favourites-item">
                        <div className="address-profile-banner">
                            <Icon path={mdiStarOutline} size={1} className="favourite-icon"/>
                            <img src={GurkanAlpay} className="profile-img-address" alt="Arif Gürkan Alpy"/>
                        </div>
                        <div className="address-profile-info">
                            <span className="address-profile-name">Arif Gürkan ALPAY</span>
                            <span className="address-profile-title">Daire Başkanı</span>
                            <span className="address-profile-unit">Satın Alma Daire Başkanlığı</span>
                            <span className="address-profile-mail">gurkan.alpay@ibb.gov.tr</span>
                            <span className="address-profile-phone">0534 000 00 00</span>
                        </div>
                        <div className="address-contact">
                            <span className="address-central">Santral: 0212 449 40 00</span>
                            <span className="address-address">Hacııahmet Mah. Muhsin Yazıcıoğlu Cad. No:1 34440 Beyoğlu / İSTANBUL</span>
                        </div>
                        <div className="address-social-links">
                            <Icon path={mdiLinkedin} size={1} className="blue-text"/>
                            <Icon path={mdiFacebook} size={1} className="primary-color-dark ml-3"/>
                            <Icon path={mdiTwitter} size={1} className="info-color ml-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}