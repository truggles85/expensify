import React from "react"
import { createStore } from "redux"

const Redux = () => {
    const store = createStore((state = { count: 0 }, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1,
                }
            case "DECREMENT":
                return {
                    count: state.count - 1,
                }
            case "RESET":
                return {
                    count: 0,
                }
            default:
                return state
        }
    })

    console.log(store.getState())

    store.dispatch({
        type: "INCREMENT",
    })

    store.dispatch({
        type: "INCREMENT",
    })

    store.dispatch({
        type: "RESET",
    })

    store.dispatch({
        type: "DECREMENT",
    })

    console.log(store.getState())

    return <div>Redux app</div>
}

export default Redux
