
import {
  fromJS
} from 'immutable'

//把一个js对象转换成immutable对象
const defaultState = fromJS({
  topList:[

],
  articleList:[


  ],
  recommendList:[


  ]

})


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
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