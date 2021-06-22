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
  width: 280px;
  float:right;
`

export const MoreButton = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    line-height:40px;
    margin: 30px auto 60px;
    padding: 0 15px;
    text-align: center;
    font-size: 15px;
    color:#fff;
    cursor:pointer;


`
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;



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

export const ListItem = styled.div`
  padding:20px 0;
  border-bottom:1px solid#dcdcdc;
  overflow:hidden;

  .pic {
    width:125px;
    height:100px;
    vertical-align:top;
    border-radius:10px;
    float:right;
  }
`

export const ListInfo = styled.div`
  width:458px;
  float:left;
  .title {
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  .desc {
    font-size:13px;
    line-height:18px;
    color:#999;
  }
`

export const RecommendWrapper = styled.div`
    margin-top: 40px;
    padding-bottom: 4px;
    min-height: 228px;
`

export const RecommendList = styled.div`
  width:100%;
  height:50px;
  line-height:50px;
  margin-bottom:6px;
  text-align:center;
  color:#fff;
  background:url(${(props) => props.picUrl});
  background-size:contain;

`

export const WriterWrapper = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    height:329px;


`