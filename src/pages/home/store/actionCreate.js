import axios from 'axios'
import { constant } from './index'

const changeHomeData = (result)=> ({
      type:constant.CHANGE_HOME_DATA,
        todoList:result.todoList,
        recommendList:result.recommendList,
        articleList :result.articleList

})
export const getHomeInfo = ()=> {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=> {
      const result = res.data.data;
      //拿到值了，派发一个action去改store的值
      const action  = changeHomeData(result)
      dispatch(action)


    }).catch(()=> {
      console.log('error');
    })
  }
}