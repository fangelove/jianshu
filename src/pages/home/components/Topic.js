import React,{Component} from 'react'
import {connect} from 'react-redux'

import {TopicWrapper,TopicItem} from '../style'

class Topic extends Component {
  render(){
    return(
      <TopicWrapper>
        {
          this.props.list.map((item)=> {
            return(
              <TopicItem key={item.get('id')}>
                <img alt='' src={item.get('picUrl')} className='img'/>
                {item.get('title')}
                {/* immutable 不能直接.  要通过get获取 */}
              </TopicItem>
            )
          })
        }


      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    list:state.get('home').get('topList')
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic)