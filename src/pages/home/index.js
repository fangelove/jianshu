import React,{Component} from 'react'
import {HomeWrapper,
        HomeLeft,
        HomeRight,


} from './style'
import {connect} from 'react-redux'
import banner from '../../statics/banner.jpeg'
import Topic  from './components/Topic'
import Recommend  from './components/Recommend'
import List  from './components/List'
import Writer  from './components/Writer'
import {actionCreate} from './store'

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

  componentDidMount(){
    this.props.changeHomeData()


  }
}

const mapDispatchToProps = (dispatch) => ({


  changeHomeData(){
    dispatch(actionCreate.getHomeInfo())


  },

})

export default connect(null,mapDispatchToProps)(Home)