import {useDispatch, useSelector} from "react-redux";
import {setBooksData} from "../../redux/books";
import {BookBlock} from "./BookBlock/BookBlock";
import  { useEffect } from "react";


export const Body = () => {
    const dispatch = useDispatch();
    const currentTitle=useSelector((state:any)=>state.booksReducer.currentTitle)
    useEffect(() => {
        dispatch(setBooksData("Глубина"))

    }, []);
    const booksData = useSelector((state: any) => state.booksReducer.booksData);

    if (!booksData) {
        return (
            <>
            </>

        )
    }

    const booksList= booksData.items.map((e:any)=>{
        debugger
            return <BookBlock icon={e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"http://tovarcerulli.com/wp-content/uploads/2010/08/unknown-book-263x300.jpg"} title={e.volumeInfo.title} author={ e.volumeInfo.authors[0]}/>
        })

    return (
        <>
            {booksList}
        </>
    )
}


{/*// return <BookBlock icon={e.volumeInfo.imageLinks.thumbnail} title={e.volumeInfo.title} author={ e.volumeInfo.authors[0]}/>*/}
