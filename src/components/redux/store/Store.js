import { createStore } from 'redux'
import counterReducer from '../reducer/CounterReducer'

const storage = createStore(counterReducer)

export default storage