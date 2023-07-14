import { useGlobalContext } from "../context/globalContext"

export default function Book({ title, cover, someAction }) {

    return (
        < div id={title} key={title} onClick={() => someAction(title)} >
            <img style={{ width: '200px' }} src={cover} />
        </div >
    )
}