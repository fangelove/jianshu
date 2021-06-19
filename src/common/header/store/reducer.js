const defaultState = {
  focused:false
}


const reducer =  (state=defaultState,action)=> {
  if(action.type === 'focus_search'){
    return {
      focused:true
    }

  }
  if(action.type === 'onBlur_search'){
    return {
      focused:false
    }

  }

  return state

}

export default reducer