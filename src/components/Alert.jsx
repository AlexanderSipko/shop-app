
import { useEffect } from "react"

function Alert (props) {

    const {name = '', closeAlert = Function.prototype} = props

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timerID)
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [name])
    

    return (
        <div id="toast-container">
            <div className="toast">добавлен в корзину: {name}</div>
        </div>
    )
}

export default Alert