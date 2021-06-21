import React,{Component} from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import {IconFontStyle} from './statics/iconfont/iconfont'
import store from './store'

class App extends Component {
  render(){
    return(
      <Provider store={store}>
      <IconFontStyle/>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact render={()=><div>home</div>}></Route>
        <Route path='/detail' exact render={()=><div>detail</div>}></Route>
      </BrowserRouter>

      </Provider>
    )
  }
}

export default App;
