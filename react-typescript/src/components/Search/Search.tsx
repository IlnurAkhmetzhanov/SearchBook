import React, {useEffect, useRef, useState} from "react"
import "./Search.scss"
import {useDispatch, useSelector} from "react-redux";
import {setBooksData} from "../../redux/books";
import {BookBlock} from "../Body/BookBlock/BookBlock";

export const Search = () => {

 const[refInput,setRef]=useState(React.createRef)

    return (
        <div className={"Search-wrapper"}>
            <div className={"Search-header"}>
                <h1>Search for books</h1>
            </div>

            <div className={"Search-input"}>


                <input  placeholder={"Ваня еблан.."}ref={refInput} onChange={()=>alert("hello")}/>

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
            {/*{booksData.items[0].volumeInfo.title}*/}
            {/*{booksData.items[0].volumeInfo.authors[0]}*/}
            {/*{booksData.items[0].volumeInfo.imageLinks.thumbnail}*/}
            {/*<BookBlock icon={booksData.items[0].volumeInfo.imageLinks.thumbnail} title={booksData.items[0].volumeInfo.title} author={booksData.items[0].volumeInfo.authors[0]}/>*/}
        </div>
    )
}