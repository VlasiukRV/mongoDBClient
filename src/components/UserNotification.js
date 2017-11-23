
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserNotification extends Component {

  render() {
    if (!this.props.notification) return <h3>Haw no notification</h3>

    const {notification} = this.props

    return (
      <div>
        <p>
          { notification.name }
        </p>
        <p>
          { notification.date }
        </p>
      </div>
    )
  }

}

UserNotification.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string
  })
}

export default UserNotification