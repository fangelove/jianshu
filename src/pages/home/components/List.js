import React,{Component} from 'react'
import {ListItem,ListInfo} from '../style'
import {connect} from 'react-redux'

class List extends Component {
  render(){
    const {list} = this.props
    return(
    <>
    {
      list.map(item=> {
        return (
          <ListItem key={item.get('id')}>
          <img  className='pic' alt='' src={item.get('picUrl')}/>
          <ListInfo>
            <h3 className='title'>{item.get('title')}</h3>
            <p className='desc'>{item.get('desc')}</p>
          </ListInfo>
        </ListItem>
        )
      })
    }


    </>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    list:state.get('home').get('articleList')
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {

  }

}

export default connect(mapStateToProps,mapDispatchToProps)(List)