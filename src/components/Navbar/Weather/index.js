import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { dayNames } from "../../../constants"
import ruzgarliIcon from "./ruzgarli-48-px.svg";
import acik from "./acik-48px.svg"
import hafifKarYagisli from "./hafif-kar-yagisli-48px.svg";
import cokBulutlu from "./cok-bulutlu--48px.svg"
import parcaliBulutlu from "./parcali-bulutu-48px.svg";
import "./style.css";

export default function () {
    const [detailOpen, setDetailOpen] = useState(false);
    // const [weatherPredictions, setWeatherPredictions] = useState([]);

    // useEffect(() => {
    //     // Burada fetch fonksiyonu olacak
    //     setTimeout(() => {
    //         setWeatherPredicts([
    //             {
    //                 date: "09.04.2020, Perşembe",
    //                 detail: "Hafif Kar Yağışlı",

    //             }
    //         ])
    //     }, 100);
    // })

    let getDate = () => {
        let date = new Date();
        return `${new Intl.DateTimeFormat("tr-TR").format(date)}, ${dayNames[date.getDay()]}`
    }
    return (
        <div className="weather-widget" onClick={() => setDetailOpen(!detailOpen)}>
            <div className="date">{getDate()}</div>
            <img src={ruzgarliIcon} alt="weather-icon" className="weather-icon" />
            <div className="weather">18 C°</div>
            <Icon path={mdiChevronDown} className="arrow-down-icon" color="#7c98b6" />
            <div className={detailOpen ? "weather-detail active" : "weather-detail"}>
                <div className="weatherItem">
                    <div className="detailItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">09.04.2020, Perşembe</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="detailItemBody">
                        <img className="weatherDetailIcon" src={hafifKarYagisli} alt="hafif-kar-yagisli" />
                        <span className="weatherDetailText">Hafif Kar Yağışlı</span>
                        <span className="weatherDegreeDay">21 C°</span>
                        <span className="weatherDegreeDayLight">8 C°</span>
                    </div>
                </div>
                <div className="weatherItem">
                    <div className="detailItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">10.04.2020, Cuma</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="detailItemBody">
                        <img className="weatherDetailIcon" src={acik} alt="acik" />
                        <span className="weatherDetailText">Açık</span>
                        <span className="weatherDegreeDay">20 C°</span>
                        <span className="weatherDegreeDayLight">8 C°</span>
                    </div>
                </div>
                <div className="weatherItem">
                    <div className="detailItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">11.04.2020, Cumartesi</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="detailItemBody">
                        <img className="weatherDetailIcon" src={parcaliBulutlu} alt="parcali-bulutlu" />
                        <span className="weatherDetailText">Parçalı Bulutlu</span>
                        <span className="weatherDegreeDay">18 C°</span>
                        <span className="weatherDegreeDayLight">8 C°</span>
                    </div>
                </div>
                <div className="weatherItem">
                    <div className="detailItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">12.04.2020, Pazar</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="detailItemBody">
                        <img className="weatherDetailIcon" src={cokBulutlu} alt="cok-bulutlu" />
                        <span className="weatherDetailText">Bulutlu</span>
                        <span className="weatherDegreeDay">18 C°</span>
                        <span className="weatherDegreeDayLight">8 C°</span>
                    </div>
                </div>
                <div className="weatherItem">
                    <div className="detailItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">13.04.2020, Pazartesi</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="detailItemBody">
                        <img className="weatherDetailIcon" src={parcaliBulutlu} alt="parcali-bulutlu" />
                        <span className="weatherDetailText">Parçalı Bulutlu</span>
                        <span className="weatherDegreeDay">18 C°</span>
                        <span className="weatherDegreeDayLight">8 C°</span>
                    </div>
                </div>
                <button className="moreButton">- DAHA FAZLA -</button>
            </div>
        </div>
    )
}