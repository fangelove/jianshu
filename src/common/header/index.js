import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import {HeaderWrapper,
      Logo,
      Nav,
      NavItem,
      NavSearch,
      Addition,
      Button,
      SearchWrapper,
      SearchInfo,
      SearchInfoTitle,
      SearchInfoSwitch,
      SearchInfoItem} from './style'
import { connect } from 'react-redux'
import {actionCreates} from './store'

class Header extends Component {
  getInfoList(){
    if(this.props.focused){
      return (
        <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一换</SearchInfoSwitch>
        </SearchInfoTitle>
        <>
        {
          this.props.list.map((item,index)=>{
            return(
              <SearchInfoItem key={index}>{item}</SearchInfoItem>
            )


          })
        }


        </>
      </SearchInfo>

      )

    }else {
      return null;
    }

  }
  render(){
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}>
            <CSSTransition in={this.props.focused} timeout={2000} classNames='slide'>
              <NavSearch className={this.props.focused ? 'focused' : ''}></NavSearch>
          </CSSTransition>
          <i className={this.props.focused ? ' iconfont iconfontActive' : 'iconfont'}>&#xe6e4;</i>
        {this.getInfoList()}
          </SearchWrapper>
          <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <NavItem className='right'>登陆</NavItem>
        </Nav>
        <Addition>
          <Button className='writing'>
          <i className='iconfont'> &#xe676;</i>

            写文章
            </Button>
          <Button className='reg'>注册</Button>

        </Addition>
      </HeaderWrapper>
    )
  }
}




const mapStateToProps = (state)=> {
  return {
    // focused:state.get('header').get('focused')
    //相当于：
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list'])


  }

}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleInputFocus(){
      dispatch(actionCreates.getList())

      dispatch(actionCreates.focusSearch())


    },
    handleInputBlur(){


      dispatch(actionCreates.onBlurSearch())



    }
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Header)