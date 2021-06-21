import React,{Component} from 'react'
import {HomeWrapper,
        HomeLeft,
        HomeRight


} from './style'
import banner from '../../statics/banner.jpeg'
import Topic  from './components/Topic'
import Recommend  from './components/Recommend'
import List  from './components/List'
import Writer  from './components/Writer'

class Home extends Component {
  render(){
    return(
      <HomeWrapper>
        <HomeLeft>
          <img alt ='banner' src={banner} className='banner-img'/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>

        </HomeRight>

      </HomeWrapper>
    )
  }
}

export default Home