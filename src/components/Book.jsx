

export default function Book({ title, cover, synopsis, addToReadingList, removeFromLibrary, saveBook }) {

    const handleClick = () => {
        addToReadingList(title)
        removeFromLibrary(title)
    }
    const handleDragStart = (e) => {
        const id = e.target.id
        saveBook(id)
    }

    // const handleMouseOver = (e) => {
    //     const synopsis = e.target.nextElementSibling
    //     const timeout = setTimeout(() => {
    //         synopsis.classList.add("active")
    //         clearTimeout(timeout)
    //     }, 1000)
    // }

    return (
        < div className='book' onDragStart={handleDragStart} draggable='true' className="book" id={title} onClick={handleClick} >
            <img style={{ height: '100%', objectFit: 'fill', zIndex: '50' }} src={cover} />
            <div className="synopsis"><p>{synopsis}</p></div>
        </div >
    )
}