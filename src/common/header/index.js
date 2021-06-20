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
    const {focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangeList} = this.props
    const jsList = list.toJS();//可以把immutable的对象装换成普通对象
    const pageList = []
    //if语句解决最后一次不满足10个，如果没有值，就不用push到数组
    if(jsList.length){
      for (let index = (page - 1) * 10; index < page * 10; index++) {
        if(jsList[index]){
        pageList.push( <SearchInfoItem key={jsList[index]}>{jsList[index]}</SearchInfoItem>)


        }

    }

    }
    if(focused || mouseIn){
      return (
        <SearchInfo onMouseEnter = {handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={()=>handleChangeList(page,totalPage)}>换一换</SearchInfoSwitch>
        </SearchInfoTitle>
        <>
        {
          pageList
        }


        </>
      </SearchInfo>

      )

    }else {
      return null;
    }

  }
  render(){
    const {focused,handleInputFocus,handleInputBlur} = this.props
    return (
      <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <SearchWrapper onFocus={handleInputFocus} onBlur={handleInputBlur}>
            <CSSTransition in={focused} timeout={2000} classNames='slide'>
              <NavSearch className={focused ? 'focused' : ''}></NavSearch>
          </CSSTransition>
          <i className={focused ? ' iconfont iconfontActive' : 'iconfont'}>&#xe6e4;</i>
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
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn']),


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



    },
    handleMouseEnter(){
      dispatch(actionCreates.mouseEnter())

    },
    handleMouseLeave(){
      dispatch(actionCreates.mouseLeave())

    },
    handleChangeList(page,totalPage){
      if(page < totalPage){
        dispatch(actionCreates.changePageList(page + 1))

      }else {
        dispatch(actionCreates.changePageList(1))
      }


    }

  }

}


export default connect(mapStateToProps,mapDispatchToProps)(Header)