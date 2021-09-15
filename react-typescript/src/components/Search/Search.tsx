import React from "react"
import "./Search.scss"

export const Search = () => {
    return (
        <div className={"Search-wrapper"}>
            <div className={"Search-header"}>
                <h1>Search for books</h1>
            </div>

            <div className={"Search-input"}>

                <input placeholder={"Ваня еблан.."}/>

                <img width={"20px"} height={"20px"}
                     src={require('./assets/loupe.svg').default}
                     alt="plus"
                     className="Study-rooms-empty__plus"
                />

            </div>
            <div className={"Search-parameters"}>
                <div className={"Search-categories"}>
                    <div className={"Search-categories__name"}>Categories</div>
                    <select className={"Search-categories__select"}>
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                    </select>
                </div>
                <div className={"Search-sorting"}>
                    <div className={"Search-sorting__name"}>Sorting By</div>
                        <select className={"Search-sorting__select"}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                </div>

            </div>

        </div>
    )
}