
import { useContext, useEffect } from "react"
import { ShopContext } from "../context"

function Alert () {

    const {value} = useContext(ShopContext);
    // const {name = ''} = props

    useEffect(() => {
        const timerID = setTimeout(value.closeAlert, 3000)
        return () => {
            clearTimeout(timerID)
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [value.alertName])
    
    return (
        <div id="toast-container">
            <div className="toast">добавлен в корзину: {value.alertName}</div>
        </div>
    )
}

export default Alert