
import {
  fromJS
} from 'immutable'
import { constant } from './index'

//把一个js对象转换成immutable对象
const defaultState = fromJS({
  todoList:[

],
  articleList:[


  ],
  recommendList:[


  ]

})


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constant.CHANGE_HOME_DATA:
      return state.merge({
        todoList:fromJS(action.todoList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      })

    default:
      return state
  }





}

export default reducer