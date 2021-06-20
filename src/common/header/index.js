import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import { connect } from 'react-redux'
import {actionCreates} from './store'


const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo href='/'/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <SearchWrapper onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}>
          <CSSTransition in={props.focused} timeout={2000} classNames='slide'>
            <NavSearch className={props.focused ? 'focused' : ''}></NavSearch>
        </CSSTransition>
        <i className={props.focused ? ' iconfont iconfontActive' : 'iconfont'}>&#xe6e4;</i>
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



const mapStateToProps = (state)=> {
  return {
    // focused:state.get('header').get('focused')
    //相当于：
    focused:state.getIn(['header','focused'])


  }

}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleInputFocus(){

      dispatch(actionCreates.focusSearch())


    },
    handleInputBlur(){


      dispatch(actionCreates.onBlurSearch())



    }
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Header)