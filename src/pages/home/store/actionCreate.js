import axios from 'axios'
import { constant } from './index'
import { fromJS } from 'immutable'

const changeHomeData = (result)=> ({
      type:constant.CHANGE_HOME_DATA,
        todoList:result.todoList,
        recommendList:result.recommendList,
        articleList :result.articleList

})

const addHomeData = (list,nextPage)=> ({
  type:constant.CHANGE_MORE_LIST,
  list:fromJS(list.moreList),
  nextPage
})
export const getHomeInfo = ()=> {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=> {
      const result = res.data.data;
      //拿到值了，派发一个action去改store的值
      const action  = changeHomeData(result)
      dispatch(action)


    })
  }
}

export const getMoreInfo = (page)=> {
  return (dispatch)=> {
    axios.get('/api/homeMoreList.json?page=' + page).then((res)=> {
      const result = res.data.data;
      console.log(res);
      //拿到值了，派发一个action去改store的值
      const action  = addHomeData(result,page+1)
      dispatch(action)


    })

  }
}