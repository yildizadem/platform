import React from "react";
import "./style.css";

export default function () {
    return (
        <div className="content">
            <div className="container">
                <div style={{ gridColumnStart: 1, gridColumnEnd: 4, height: "100px", background: "red" }}></div>
                <div style={{ gridColumnStart: 4, gridColumnEnd: 7, height: "100px", background: "red" }}></div>
                <div style={{ gridColumnStart: 7, gridColumnEnd: 10, height: "100px", background: "red" }}></div>
                <div style={{ gridColumnStart: 10, gridColumnEnd: 13, height: "100px", background: "red" }}></div>
                <div style={{ gridColumnStart: 1, gridColumnEnd: 10, height: "300px", background: "green" }}></div>
                <div style={{ gridColumnStart: 10, gridColumnEnd: 13, height: "300px", background: "green" }}></div>

            </div>
        </div>
    )
}