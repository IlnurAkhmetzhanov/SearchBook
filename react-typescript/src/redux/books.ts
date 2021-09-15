import {getBooksData} from "../services/getBooks";

const SET_BOOKS_DATA="SET_BOOKS_DATA"
const SET_CURRENT_TITLE="SET_CURRENT_TITLE"
const initialState:any = {
    booksData:null,
    currentTitle:null

};


export const booksReducer = (state=initialState, action:any) => {
    switch (action.type) {
        case SET_BOOKS_DATA :
            return {
                ...state,
                booksData: action.booksData,
            };
        case SET_CURRENT_TITLE :
            return {
                ...state,
                currentTitle:action.currentTitle
            }


        default:
            return state;
    }
};

const setBooksDataActionCreator=(booksData:any)=>({
    type:SET_BOOKS_DATA,
        booksData
})

export const setBooksData = (bookName:string) => async (dispatch: any) => {
    const data = await getBooksData(bookName);
    dispatch(setBooksDataActionCreator(data))
};
const setCurrentTitleActionCreator=(currentTitle:any)=>({
    type:SET_CURRENT_TITLE,
    currentTitle
})
