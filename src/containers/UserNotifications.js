import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserNotificationsList from './../components/UserNotificationsList'
import Spinner from './../stylesheets/img/Spinner'

import '../stylesheets/UserNotificationsStyle.css';

class UserNotifications extends Component {

  componentDidMount() {}

  render() {
    const head = (<div className='information-block-title'>
                    <h3>Notifications</h3></div>);

    return (
      <div className='information-block user-notifications'>
        { head }
        <div className='information-block-body'>
          { this.getBody() }
        </div>
        <ul className='information-block-nav'>
          <li> <a href='#' title='More'>More</a></li>
        </ul>
      </div>
    )

  }

  getBody() {
    const {loading, notificationsList} = this.props

    if (loading) {
      return (
        <h1><Spinner width='50' height='50' /></h1>
      )
    }

    return (
      <div>
        <UserNotificationsList notificationsList={ notificationsList } />
      </div>
    )

  }

}

export default connect(
  ({userNotificationList, userNotificationListFilters}) => (
  {
    loading: userNotificationList.get('loading'),
    notificationsList: filterNotificationsList(userNotificationList.get('userNotificationList'), userNotificationListFilters)
  }
  )
)(UserNotifications)

function filterNotificationsList(entityList, filters) {
  let entityListFiltered = entityList

  const term = filters.term.toLowerCase();
  if (term != '') {
    entityListFiltered = entityList.filter(entity => {
      return entity.name.toLowerCase().includes(term);
    })
  }

  return entityListFiltered.valueSeq();
}
