import  {constant} from './index'

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