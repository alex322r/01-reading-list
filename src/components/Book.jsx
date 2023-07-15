

export default function Book({ title, cover, addToReadingList, removeFromLibrary, saveBook }) {

    const handleClick = () => {
        addToReadingList(title)
        removeFromLibrary(title)
    }
    const handleDragStart = (e) => {
        const id = e.target.parentElement.id
        saveBook(id)
    }

    const handleDragEnd = (e) => {
        const id = e.target.parentElement.id
        removeFromLibrary(id)
    }

    return (
        < div onDragStart={handleDragStart} onDragEnd={handleDragEnd} draggable='true' className="book" id={title} onClick={handleClick} >
            <img style={{ width: '200px' }} src={cover} />
        </div >
    )
}