import React, { Component } from 'react'

import UserNotificationsListSearchBar from '../containers/UserNotificationsListSearchBar'
import UserNotification from './UserNotification'

class UserNotificationsList extends Component {

  render() {
    return <div>
             { this.getBody() } </div>
  }

  getBody() {
    const {notificationsList} = this.props
    const notifacationItems = notificationsList.map(userNotification => <li key={ userNotification.id }>
                                                                          <UserNotification notification={ userNotification } />
                                                                        </li>)
    return (
      <div>
        <UserNotificationsListSearchBar />
        <ul>
          { notifacationItems }
        </ul>
      </div>
    )
  }

}

export default UserNotificationsList
