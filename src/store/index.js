import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'

import api from '../middlewares/api'

const enhancer = compose(
  applyMiddleware(
    thunk,
    api
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store