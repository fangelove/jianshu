
import {
  fromJS
} from 'immutable'

//把一个js对象转换成immutable对象
const defaultState = fromJS({
  topList:[
    {
      id:1,
      title:'社会热点',
      picUrl:'https://reviveimg.hellorf.com/www/images/131356cd65174a9073c33ae39bc9fb93.png'
    },
    {
      id:2,
      title:'王甜甜',
      picUrl:'https://reviveimg.hellorf.com/www/images/585ceb3918f3555c990c99c846eb5d82.jpeg'
    },
    {
      id:3,
      title:'小战',
      picUrl:'https://reviveimg.hellorf.com/www/images/dd5ccbc18932c8e19cc0e38b37719d81.jpg'
    }

]

})


const reducer = (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }





}

export default reducer