import React from 'react'
import PropTypes from 'prop-types'

import s from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline, id }) => {
    
    const statusClassName = isOnline ? s.statusOnline : s.statusOffline
    return <li key={id} className={s.item}>
  <span className={statusClassName}></span>
  <img  src={avatar} alt={name} width="48" />
        <p>{ name}</p>
  </li>
  
}

FriendListItem.propTypes = {
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.string,
  id:PropTypes.string,
}







export default FriendListItem