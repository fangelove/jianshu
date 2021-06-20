import  {constant} from './index'
import axios from 'axios'
import { fromJS } from 'immutable'

export const focusSearch =  ()=> {
  return {
    type:constant.HEADER_SEARCH_ONFOCUS
  }
}

export const onBlurSearch =  ()=> {
  return {
    type:constant.HEADER_SEARCH_ONBLUR
  }
}

const changeList = (data)=> {
  return {
    type:constant.CHANGE_LIST,
    data:fromJS(data)//在reduce.js中收使用fromJs对象把state变成了immutable，所以list数组也要变成immutable
  }
}
//redux-thunk 返回一个函数
//接收一个dispatch参数

//主要用来派发一个异步的请求

export const getList = ()=> {
  return (dispatch)=> {
    axios.get('/api/headerList.json').then((res)=> {
      const data = res.data
      dispatch(changeList(data.data))

    }).catch(()=> {
      console.log('error');
    })

  }
}