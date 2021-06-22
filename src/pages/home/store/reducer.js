
import {
  fromJS
} from 'immutable'
import { actionCreate, constant } from './index'

//把一个js对象转换成immutable对象
const defaultState = fromJS({
  todoList:[

],
  articleList:[


  ],
  recommendList:[


  ],
  moreList:[],
  articlePage:1,
  scrollShow:false

})

const homeDataState = (state,action)=> {
  return state.merge({
    todoList:fromJS(action.todoList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList)
  })
}

const moreListState = (state,action)=> {
  return state.merge({
    'articleList':state.get('articleList').concat(action.list),
    'articlePage':action.nextPage
  })
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_HOME_DATA:
      return homeDataState(state,action)
      case constant.CHANGE_MORE_LIST:
        return moreListState(state,action)
        case constant.TOGGLE_CHANGE:
          return state.set('scrollShow',action.show)
    default:
      return state
  }





}

export default reducer