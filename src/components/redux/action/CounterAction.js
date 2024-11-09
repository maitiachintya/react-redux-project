import { COUNTER } from "../action/ActionConst";

export const increCount = () => {
    return {
        type: COUNTER.INCREMENT,
        payload: { msg: "increment done" }
    }
}

export const decreCount = () => {
    return {
        type: COUNTER.DECREMENT,
        payload: { msg: "decrement done" }
    }
}

export const resetCount = () => {
    return {
        type: COUNTER.RESET,
        payload: { msg: "reset done" }
    }
}