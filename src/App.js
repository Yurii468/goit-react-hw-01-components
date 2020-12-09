import React from 'react';

import Profile from './components/Profiles'
import Statistics from './components/Statistics'
import FriendsList from './components/Friendlist'
import Transactions from './components/Transactions'


import userData from './data/user.json'
import statisticalData from './data/statistical-data.json'
import friendsData from './data/friends.json'
import transactions from './data/transactions.json'





const App = () => {
  return (<>
    <h2>Task-1</h2>
  <Profile
    name={userData.name}
    tag={userData.tag}
    location={userData.location}
    avatar={userData.avatar}
      stats={userData.stats} />
    <h2>Task-2</h2>
    <Statistics
      items={statisticalData} />
    <h2>Task-3</h2>
    <FriendsList friends={friendsData} />
    <h2>Task-4</h2>
    <Transactions transactions={ transactions}/>
    </>
  )
}

export default App