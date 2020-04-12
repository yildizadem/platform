import React, {useEffect, useRef, useState} from "react";
import Icon from "@mdi/react";
import {mdiBellRing} from "@mdi/js";
import "./style.css"

export default function () {
    const [detailOpen, setDetailOpen] = useState(false);
    const node = useRef();
    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setDetailOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);
    return (
        <div className="notifications" ref={node} onClick={() => setDetailOpen(!detailOpen)}>
            <Icon path={mdiBellRing} size={1} color="#7c98b6" />
            <div  className={detailOpen ? "notifications-detail active animated fadeIn" : "notifications-detail"}>
                <div className="notificationItem">
                    <div className="notificationItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">09.04.2020, Perşembe</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="notificationItemBody">
                        <span className="notificationText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </div>
                </div>
                <div className="notificationItem">
                    <div className="notificationItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">10.04.2020, Cuma</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="notificationItemBody">
                        <span className="notificationText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </div>
                </div>
                <div className="notificationItem">
                    <div className="notificationItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">11.04.2020, Cumartesi</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="notificationItemBody">
                        <span className="notificationText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </div>
                </div>
                <div className="notificationItem">
                    <div className="notificationItemHeader">
                        <span className="leftLine"></span>
                        <span className="dateText">12.04.2020, Pazar</span>
                        <span className="rightLine"></span>
                    </div>
                    <div className="notificationItemBody">
                        <span className="notificationText">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                    </div>
                </div>
                <button className="moreButton">- DAHA FAZLA -</button>
            </div>
        </div>
    )
}