import Filters from "./Filters";

export default function Header({ library, readingList }) {
    return (
        <header style={{ display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'center' }}>
            <h2>{library.length} libros disponible</h2>
            <p>{readingList.length} en la lista de lectura</p>
            <Filters />
            <p>Haz click o arrastra los libros para añadirlos a la lista de lectura</p>
        </header>
    )
}