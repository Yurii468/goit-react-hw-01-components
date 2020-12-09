import React from 'react'

import FriendsListItems from './FriendsListItem'



import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
    if (friends.lenght === 0) return null
    return <ul className={s.friendList}>{friends.map(FriendsListItems)}
  
    </ul>
}



 



export default FriendList