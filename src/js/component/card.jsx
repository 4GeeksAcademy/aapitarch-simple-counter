import React from "react";

const Card = ({ digit }) => {
    return (
        <div className="card mb-3 bg-dark m-2" style={{ width: "8rem", height: "4rem" }}>
            <h5 className="card-title text-center text-white p-3">{ digit }</h5>
        </div>
    );
}

export default Card;