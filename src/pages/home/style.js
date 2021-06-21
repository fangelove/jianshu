import styled from 'styled-components'


export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow:hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  float:left;
  margin-left:15px;
  padding-top:30px;
  .banner-img {
    width:625px;
    height:270px;
      }
`
export const HomeRight = styled.div`
  width: 240px;
  float:right;
`
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;


`

export const TopicItem = styled.div`
      float:left;
      background:#f7f7f7;
      height:32px;
      line-height:32px;
      margin-left:18px;
      font-size:14px;
      color:#000;
      border:1px solid #dcdcdc;
      border-radius:4px;
      padding-right:10px;
      margin-bottom:18px;

      .img {
        height:100%;
        width:32px;
        vertical-align:top;
        margin-right:10px;
      }

`