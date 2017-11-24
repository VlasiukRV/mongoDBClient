import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AppPageHeader extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return <div className='navbar navbar-default navbar-fixed-top' role='navigation'>
             <div className='container-fluid'>
               <div className='navbar-header'>
                 <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                   <span className='sr-only'>Toggle navigation</span>
                   <span className='icon-bar'></span>
                   <span className='icon-bar'></span>
                   <span className='icon-bar'></span>
                 </button>
                 <Link className='navbar-brand' to='/'>MongoDB Client
                 </Link>
               </div>
               <div className='collapse navbar-collapse'>
                 <ul className='nav navbar-nav navbar-right'>
                   <Link to='/' title='Home'>Home</Link>
                 </ul>
               </div>
             </div>
           </div>
  }

  LogOut(event) {
    event.preventDefault()
    this.props.logOutUser()
  }
}

export default AppPageHeader