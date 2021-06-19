import {constant} from './index'

const defaultState = {
  focused:false
}


const reducer =  (state=defaultState,action)=> {
  if(action.type === constant.HEADER_SEARCH_ONFOCUS){
    return {
      focused:true
    }

  }
  if(action.type === constant.HEADER_SEARCH_ONBLUR){
    return {
      focused:false
    }

  }

  return state

}

export default reducer