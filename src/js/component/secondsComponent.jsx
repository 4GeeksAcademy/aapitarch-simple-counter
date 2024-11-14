import React from "react";
import Card from "./card";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="background-container">
            <div className="d-flex justify-content-center">
                <div className="card mb-3 bg-dark m-2" style={{ width: "8rem", height: "4rem" }}>
                    <i className="far fa-clock text-white text-center m-2 p-2"></i>
                </div>

                <Card digit={Math.floor(seconds / 10000) % 10}/>
                <Card digit={Math.floor(seconds / 1000) % 10}/>
                <Card digit={Math.floor(seconds / 100) % 10}/>
                <Card digit={Math.floor(seconds / 10) % 10}/>
                <Card digit={seconds % 10}/>
            </div>
        </div>
    );
}

export default SecondsCounter;