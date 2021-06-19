import {combineReducers} from 'redux'

import {reduce as HeaderReduce} from '../common/header/store'
const reduce = combineReducers({
  header:HeaderReduce
})
export default reduce