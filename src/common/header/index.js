import React from 'react'
import { CSSTransition } from 'react-transition-group'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import { connect } from 'react-redux'

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
    focused:state.header.focused

  }

}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleInputFocus(){
      const action = {
        type:'focus_search'
      }
      dispatch(action)


    },
    handleInputBlur(){
      const action = {
        type:'onBlur_search'
      }
      dispatch(action)



    }
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Header)