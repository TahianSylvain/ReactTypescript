import { useReducer } from "react"

type CounterState = {count: number}
type CounterAction = {
    playload: number,
    type: "increment" | 'decrement' | 'reset'
}
const initialState = {count:0}

function reducer(state:CounterState, action:CounterAction){
    switch (action.type){
        case "increment":
            return { count: state.count+action.playload}
        case "decrement":
            return { count: state.count-action.playload}
        case "reset":  return initialState
        default: return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <div> Count: {state.count}
        <button onClick={()=>dispatch(
            {type: "increment", playload: 10})}>Increment 10
        </button>
        <button onClick={()=>dispatch(
            {type: "decrement", playload: 10})}>Decrement 10
        </button>
        <button onClick={()=>dispatch(
            {type: "reset", playload: 0})}>Decrement 10
        </button>
    </div>
}