import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from '../store'
import AppPageHeader from './AppPageHeader'
import AppRoute from './AppRoute'


import '../stylesheets/App.css';

export default class App extends Component {

  render() {
    return <div>
             <Provider store={ store }>
               <MuiThemeProvider>
                 <div>
                   <AppPageHeader />
                   <AppRoute />
                 </div>
               </MuiThemeProvider>
             </Provider>
           </div>
  }

}