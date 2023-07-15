export default function BookInReadingList({ title, cover, removeBookFromReadingList }) {


    return (
        < div className="book" id={title} onClick={() => removeBookFromReadingList(title)} >
            <img style={{ height: '100%' }} src={cover} />
        </div >
    )
}

