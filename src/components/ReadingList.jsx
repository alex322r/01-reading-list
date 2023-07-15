import { useGlobalContext } from "../context/globalContext"
import BookInReadingList from "./BookInReadingList"

export default function ReadingList() {
  const { readingList, addToLibrary, removeFromLibrary, addToReadingList, removefromReadingList, savedBook } = useGlobalContext()
  const removeBookFromReadingList = (id) => {
    addToLibrary(id)
    removefromReadingList(id)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = () => {
    const savedBookId = savedBook.book.title
    addToReadingList(savedBookId)
  }

  return (
    <aside onDragOver={handleDragOver} onDrop={handleDrop} style={{ width: '35%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem' }} >Lista de Lectura</h2>
      <div style={{ display: 'flex', gap: '10px ', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }} >

        {
          readingList.map(book => {
            const { title, cover } = book
            return (
              <BookInReadingList removeBookFromReadingList={removeBookFromReadingList} key={title} title={title} cover={cover} />
            )
          })
        }
      </div>

    </aside>

  )
}