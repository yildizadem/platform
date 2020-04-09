import React, { useState } from "react";
import Icon from "@mdi/react";
import {
    mdiViewDashboardOutline, mdiMapOutline, mdiFingerprint, mdiFlower,
    mdiBank, mdiBusClock, mdiCity, mdiFlash, mdiNaturePeople, mdiMemory, mdiMenuOpen, mdiMenu, mdiClose
} from "@mdi/js";
import ibbLogoWide from "./ibb-logo-wide.svg";
import ibbLogo from "./ibb-logo.svg";
import "./style.css";

export default function () {
    const [expand, setExpand] = useState(false);
    return (
        <nav className={expand ? "sidebar expand" : "sidebar"}>
            <div className="menu-icon top-menu-open-icon" onClick={() => setExpand(!expand)}>
                <Icon path={expand ? mdiClose : mdiMenu} size={1} />
            </div>
            <div className="logo">
                <img src={expand ? ibbLogoWide : ibbLogo} alt="ibb-logo" />
                {expand && <span>PORTAL</span>}
            </div>
            <div className="menu-icon main-menu-icon">
                <Icon path={mdiViewDashboardOutline} size={1} />
                {expand && <span>Ana Ekran</span>}
            </div>
            <div className="menu-icon main-menu-icon">
                <Icon path={mdiMapOutline} size={1} />
                {expand && <span>Şehir Haritası</span>}
            </div>
            {expand && (
                <div className="menu-title">VERI KATAGORİLERİ</div>
            )}
            <div className="categories">
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiFingerprint} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Yaşam</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>YAŞAM</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiFlower} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Çevre</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>ÇEVRE</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiBusClock} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Mobilite</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>MOBİLİTE</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiBank} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Ekonomi</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>EKONOMİ</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiCity} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Yönetişim</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>YÖNETİŞİM</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiFlash} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Enerji</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>ENERJİ</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiNaturePeople} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">İnsan</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>İNSAN</label>)}
                </div>
                {expand && (<hr />)}
                <div className="menu-icon sub-menu-icon">
                    <Icon path={mdiMemory} size={1} />
                    {expand ? (
                        <div className="info">
                            <div className="title">Bilgi Teknolojileri</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi sit amet dui eu nulla aliquam auctor.</div>
                        </div>
                    ) : (<label>BT</label>)}
                </div>
            </div>
            <div className="menu-icon bottom-menu-open-icon" onClick={() => setExpand(!expand)}>
                <Icon path={mdiMenuOpen} size={1} />
                {expand && <span>MENÜYÜ DARALT</span>}
            </div>
        </nav>
    )
}