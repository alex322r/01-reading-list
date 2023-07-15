export default function BookInReadingList({ title, cover, removeBookFromReadingList }) {


    return (
        < div className="book" id={title} onClick={() => removeBookFromReadingList(title)} >
            <img style={{ width: '200px' }} src={cover} />
        </div >
    )
}