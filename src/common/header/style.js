import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
 height:56px;
 border:1px solid #f0f0f0;
 position:relative;
 display:flex
`

export const Logo = styled.div`
  display:block;
  height:56px;
  width:100px;
  position:absolute
  top:0;
  left:0;
  background:url(${logoPic});
  background-size:contain
`

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
`

export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left {
    float:left
  }
  &.right {
    float:right;
    color:#969696;

  }

  &.active {
    color:#ea6f5a

  }

`
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:64px;
  width:250px;
  padding:20px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.2);

`
export const SearchInfoTriangle = styled.div`
  width:0;
  height:0;
  position:absolute;
  top:-20px;
  filter: drop-shadow(0 -2px 4px rgba(0, 0, 0, .2));
  border: 10px solid #fff;
  border-right: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;

`
export const SearchInfoSwitch = styled.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  &:hover {
    color:#333;

  }
  .zoom {
    margin-right:5px;
    font-size:12px;
    position:static!important;
    transition:all .2s ease-in;
    display:inline-block;
    transform-origin:center center;

  }
`
export const SearchInfoItem = styled.a`
  display:block;
  line-height:20px;
  color:#787878;
  border:1px solid #ddd;
  border-radius:3px;
  font-size:12px;
  padding: 0 5px;
  float:left;
  margin-right:10px;
  margin-bottom:15px;
`
export const SearchInfoTitle = styled.div`
  margin-top:0px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;

`
export const SearchWrapper =  styled.div`
  float:left;
  position:relative;

  .iconfont {
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;



  }
  .iconfontActive {
    background:#777;
    color:#fff
  }


`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'

})`
  width:160px;
  height:38px;
  margin-top:9px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  color:#666;
  margin-left:20px;
  &::placeholder {
    color:#999;
  }
  &.focused {
    width:250px;
  }
  &.slide-enter{
    transition:all .5s ease-out

  }
  &.slide-enter-active {
    width:250px;

  }
  &.slide-exit{
    transition:all .5s ease-out

  }
  &.slide-exit-active {
    width:160px;

  }


`
export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`

export const Button = styled.div`
float:right;
height: 38px;
line-height: 38px;
margin: 9px 5px 0 15px;
border-radius:19px;
border:1px solid #ec6149;
margin-right:20px;
font-size;14px;
padding:0 20px;
&.reg {
  color:#ec6149
}
&.writing {
  color:#fff;
  background:#ec6149
}
`