import React from "react";

export const BookBlock=(props:any)=>{
    return(
        <div className={"BookBlock-wrapper"}>
            <div className={"BookBlock-icon"}>
                <img
                     src={props.icon}

                />
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