import {combineReducers} from 'redux'

import HeaderReduce from '../common/header/store'
const reduce = combineReducers({
  header:HeaderReduce
})
export default reduce