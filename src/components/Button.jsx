import { useDispatch } from "react-redux"
import { addNumber, addOperator, castDecimal, setClear, setResult } from '../store/displaySlice'

export default function Button({ name, type, id }) {
    const dispatch = useDispatch()

    function handleClick(event) {
        switch (event.target.getAttribute("data-type")) {
            case "number":
                dispatch(addNumber(event.target.textContent))
                break
            case "operator":
                dispatch(addOperator(event.target.textContent))
                break
            case "decimal":
                dispatch(castDecimal(event.target.textContent))
                break
            case "clear":
                dispatch(setClear())
            case "equal":
                dispatch(setResult())
                break
        }
    }

    return (
        <button id={ id } data-type={ type } onClick={ handleClick }>{ name }</button>
    )
}