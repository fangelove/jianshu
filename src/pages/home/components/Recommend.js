import React,{PureComponent} from 'react'

import {RecommendWrapper,RecommendList} from '../style'

import {connect} from 'react-redux'

class Recommend extends PureComponent {
  render(){
    const {list} = this.props
    return(
      <RecommendWrapper>
        {
          list.map(item => {
            return(
              <RecommendList key={item.get('id')} picUrl={item.get('picUrl')}>
              {item.get('title')}
            </RecommendList>
            )
          })

        }

      </RecommendWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    list:state.getIn(['home','recommendList'])
  }
}

export default connect(mapStateToProps,null)(Recommend)