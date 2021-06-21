import React,{Component} from 'react'
import {HomeWrapper,
        HomeLeft,
        HomeRight


} from './style'
import axios from 'axios'
import {connect} from 'react-redux'
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

  componentDidMount(){
    const {changeHomeData} = this.props
    axios.get('/api/home.json').then((res)=> {
      const result = res.data.data;
      //拿到值了，派发一个action去改store的值
      const action  = {
        type:'change_home_data',
        todoList:result.todoList,
        recommendList:result.recommendList,
        articleList :result.articleList
      }
      changeHomeData(action)

    }).catch(()=> {
      console.log('error');
    })

  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData(action){
    dispatch(action)

  }
})

export default connect(null,mapDispatchToProps)(Home)