import React from 'react'
import PropTypes from 'prop-types'


import s from './Stats.module.css'



const Stats = ({followers,views,likes }) => {
    return   <ul className={s.statsList}>
    <li className={s.statsItem}>
      <span className={s.label}>Followers</span>
            <span className={s.quantity}>{followers}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{views}</span>
    </li>
    <li className={s.statsItem}>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
}
Stats.propTypes = {
  followers:PropTypes.number,
  views:PropTypes.number,
  likes:PropTypes.number,
  
}


export default Stats