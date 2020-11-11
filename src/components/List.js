import React from "react";
import { Link } from "react-router-dom";
import "./List.css";

function List({ contents, startDate, complete, important }) {
    return (
        <div className="list">
            <div className="list-important">
                {important ? (<Link to={{ pathname: "/important", state: { important: true } }}>[중요]</Link>) : "[ ___ ]"}
            </div>
            <div className="list-contents">{contents}</div>
            <div className="list-startDate">{startDate}</div>
            <div className="list-complete">
                {complete ? (<Link to={{ pathname: "/completed", state: { complete: true } }}>[완료]</Link>) : "[ ___ ]"}
            </div>
        </div>
    )
}

export default List;