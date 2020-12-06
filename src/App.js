import React from 'react';

import Profile from './components/Profiles'

import userData from './data/user.json'





const App = () => {
  return<Profile
    name={userData.name}
    tag={userData.tag}
    location={userData.location}
    avatar={userData.avatar}
    stats={userData.stats}/>
}

export default App