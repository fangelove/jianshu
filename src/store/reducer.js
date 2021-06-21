import {combineReducers} from 'redux-immutable'

import {reduce as HeaderReduce} from '../common/header/store'
import {reduce as HomeReduce} from '../pages/home/store'
const reduce = combineReducers({
  header:HeaderReduce,
  home:HomeReduce
})
export default reduce