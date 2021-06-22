import React,{PureComponent} from 'react'
import {HomeWrapper,
        HomeLeft,
        HomeRight,
        BackTop


} from './style'
import {connect} from 'react-redux'
import banner from '../../statics/banner.jpeg'
import Topic  from './components/Topic'
import Recommend  from './components/Recommend'
import List  from './components/List'
import Writer  from './components/Writer'
import {actionCreate} from './store'

class Home extends PureComponent {
  handleToTop(){
    window.scrollTo(0,0)
  }
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
        {this.props.scrollShow ?
        <BackTop onClick = {this.handleToTop}>顶部</BackTop>
        : null

        }
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvent()
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScreen)

  }
  bindEvent(){
    window.addEventListener('scroll',this.props.changeScreen)
  }
}

const mapStateToProps = (state)=> {
  return {
    scrollShow:state.getIn(['home','scrollShow'])
  }
}

const mapDispatchToProps = (dispatch) => ({


  changeHomeData(){
    dispatch(actionCreate.getHomeInfo())


  },
  changeScreen(){
    if(window.document.documentElement.scrollTop > 200){
      dispatch(actionCreate.toggleScroll(true))

    }else {
      dispatch(actionCreate.toggleScroll(false))

    }

  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)