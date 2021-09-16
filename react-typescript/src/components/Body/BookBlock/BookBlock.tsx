import React from "react";
import "./BookBlock.scss"
import {Redirect} from 'react-router-dom'

export const BookBlock = (props: any) => {
    return (
        <div className={"BookBlock-wrapper"} onClick={() => {
            window.location.assign(`${props.link}`)
        }}>
            <div className={"BookBlock-icon"}>
                <img
                    src={props.icon}

                />s

            </div>
            <div className={"BookBlock-title"}>
                {props.title}
            </div>
            <div className={"BookBlock-author"}>
                {props.author}
            </div>
        </div>
    )
}