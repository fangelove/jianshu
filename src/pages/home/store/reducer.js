
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

],
  articleList:[
    {
      id:1,
      title:'发现美句——村上春树',
      desc:'1.哪里会有人喜欢孤独，不过是不喜欢失望罢了。',
      picUrl:'https://reviveimg.hellorf.com/www/images/131356cd65174a9073c33ae39bc9fb93.png'
    },
    {
      id:2,
      title:'永恒之井',
      desc:'我的小猫丢了，钻进了屋后的小树林，我循着它的声音跟着。这个地方我一直不敢来，因为那的树上常年挂着几只猫的尸体。有良心的人家会用个布袋装着挂上去，而有的人图省事，直接把原来拴着的绳子往树上一绑。风吹日晒中日子久了，风一吹，猫的尸体在树上晃来晃去，着实的恐怖。',
      picUrl:'https://reviveimg.hellorf.com/www/images/585ceb3918f3555c990c99c846eb5d82.jpeg'
    },
    {
      id:3,
      title:'读书年代欠鲁迅先生的，以后的日子里慢慢归还！',
      desc:'从前不懂鲁迅，再看满眼泪花 ',
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