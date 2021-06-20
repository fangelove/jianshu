import {
  constant
} from './index'
import {
  fromJS
} from 'immutable'

//把一个js对象转换成immutable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn:false,
  page:1,
  totalPage:1
})


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.HEADER_SEARCH_ONFOCUS:
      //immutable对象的set方法，会结合之前immutable对象的值
      //和设置的值，返回一个全新的对象
      return state.set('focused', true)

    case constant.HEADER_SEARCH_ONBLUR:
      return state.set('focused', false)
    case constant.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage',action.totalPage)
      return state.merge({
        list:action.data,
        totalPage:action.totalPage

      })
    case constant.HEADER_MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constant.HEADER_MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constant.HEADER_CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }





}

export default reducer