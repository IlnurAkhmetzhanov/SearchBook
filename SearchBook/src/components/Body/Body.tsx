import {useDispatch, useSelector} from "react-redux";
import {setBooksData} from "../../redux/books";
import {BookBlock} from "./BookBlock/BookBlock";
import  { useEffect } from "react";
import "./Body.scss"

export const Body = () => {
    const dispatch = useDispatch();
    const currentTitle=useSelector((state:any)=>state.booksReducer.currentTitle)
    useEffect(() => {
        dispatch(setBooksData(currentTitle||"JavaScript"))

    }, [currentTitle]);
    const booksData = useSelector((state: any) => state.booksReducer.booksData);
    debugger
    if (!booksData) {
        return (
            <>

            </>

        )
    }

    const booksList=Array.isArray(booksData.items)&&booksData.items.map((e:any)=>{

        return <BookBlock icon={e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"http://tovarcerulli.com/wp-content/uploads/2010/08/unknown-book-263x300.jpg"}
                              title={e.volumeInfo?.title} author={ e.volumeInfo?.authors} link={e.volumeInfo.infoLink} />
        })

    return (
       <>
        <div className={"Body-wrapper"}>
            {booksList}
        </div>
           {!Array.isArray(booksData.items)?<h2 className={"Body-error"}>Эй,чемпион! Такой книги не существует</h2>:null}
       </>
    )
}

