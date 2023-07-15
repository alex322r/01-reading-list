

export default function reducer(state, action) {

    if (action.type === 'ADD_BOOK_TO_READING_LIST') {
        const bookToAdd = state.library.find(book => book.title === action.payload)
        if (!bookToAdd) return { ...state }
        const newReadingList = [...state.readingList, bookToAdd]
        return { ...state, readingList: newReadingList }
    }
    if (action.type === 'REMOVE_BOOK_FROM_LIBRARY') {
        const newLibrary = [...state.library].filter(book => book.title !== action.payload)
        return { ...state, library: newLibrary }
    }

    if (action.type === 'ADD_BOOK_TO_LIBRARY') {
        const bookToAdd = state.readingList.find(book => book.title === action.payload)
        if (!bookToAdd) return { ...state }
        const newLibrary = [...state.library, bookToAdd]
        return { ...state, library: newLibrary }
    }

    if (action.type === 'REMOVE_BOOK_FROM_READING_LIST') {
        const newReadingList = [...state.readingList].filter(book => book.title !== action.payload)

        return { ...state, readingList: newReadingList }
    }

    if (action.type === 'CHANGE_FILTERS') {
        return { ...state, filters: action.payload }
    }

    if (action.type === 'SAVE_BOOK') {
        const bookToSave = state.library.find(book => book.title === action.payload)
        const bookIndex = state.library.findIndex(book => book.title === action.payload)
        const savedBook = { book: bookToSave, index: bookIndex }
        return { ...state, savedBook }
    }
    if (action.type === 'SYNC') {
        return { ...action.payload }
    }

    return state

}