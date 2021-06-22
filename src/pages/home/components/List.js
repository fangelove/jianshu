import React,{Component} from 'react'
import {ListItem,ListInfo,MoreButton} from '../style'
import {connect} from 'react-redux'
import {actionCreate} from '../store'

class List extends Component {
  render(){
    const {list,page,handleMore} = this.props
    return(
    <>
    {
      list.map((item,index)=> {
        return (
          <ListItem key={index}>
          <img  className='pic' alt='' src={item.get('picUrl')}/>
          <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className='desc'>{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
        )
      })
    }
    <MoreButton onClick={()=>handleMore(page)}>阅读更多</MoreButton>


    </>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    list:state.get('home').get('articleList'),
    page:state.getIn(['home','articlePage'])
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    handleMore(page){
      dispatch(actionCreate.getMoreInfo(page))

    }

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(List)