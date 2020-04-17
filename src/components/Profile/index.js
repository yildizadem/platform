import React, {useState} from "react";
import "./style.css"
import "../../index.css"
import ProfileBanner from "./ProfileBanner"
import ProfilePanel from "./ProfilePanel"
import AddressPanel from "./AddressPanel"
import PasswordPanel from "./PasswordPanel"
import SettingsPanel from "./SettingsPanel"

export default function() {
    const [activeTab, setActiveTab] = useState(1);
    return(
        <div className="profile-page">
            <ProfileBanner/>
            <div className="tabs">
                <div className="nav-tabs">
                    <div className="nav-tabs-item c_pointer" onClick={() => setActiveTab(1)}>
                        <span className={activeTab === 1 ? "profile-tab active" : "profile-tab" }>KİŞİSEL BİLGİLER</span>
                        <span className="separator"/>
                        <span className={activeTab === 1 ? "line-profile active" : "line-profile"}/>
                    </div>
                    <div className="nav-tabs-item c_pointer" onClick={() => setActiveTab(2)}>
                        <span className="address-tab">ADRES DEFTERİ</span>
                        <span className="separator"/>
                        <span className={activeTab === 2 ? "line-address active" : "line-address"}/>
                    </div>
                    <div className="nav-tabs-item c_pointer" onClick={() => setActiveTab(3)}>
                        <span className="settings-tab">PORTAL VERİ AYARLARI</span>
                        <span className="separator"/>
                        <span className={activeTab === 3 ? "line-settings active" : "line-settings"}/>
                    </div>
                    <div className="nav-tabs-item c_pointer" onClick={() => setActiveTab(4)}>
                        <span className="password-tab">ŞİFRE AYARLARI</span>
                        <span className={activeTab === 4 ? "line-password active" : "line-password"}/>
                    </div>
                </div>
                <div className="nav-panels">
                    <div className={activeTab === 1 ? "pane-profile active" : "pane-profile"}>
                        <ProfilePanel/>
                    </div>
                    <div className={activeTab === 2 ? "pane-notebook active" : "pane-notebook"}>
                        <AddressPanel/>
                    </div>
                    <div className={activeTab === 3 ? "pane-settings active" : "pane-settings"}>
                        <SettingsPanel/>
                    </div>
                    <div className={activeTab === 4 ? "pane-password active" : "pane-password"}>
                        <PasswordPanel/>
                    </div>
                </div>
            </div>
        </div>
    )
}