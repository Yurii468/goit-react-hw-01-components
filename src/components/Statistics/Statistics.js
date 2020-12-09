import React from 'react'
import PropTypes from 'prop-types'

import s from './Statistic.module.css'
const StatsListItems = ({id,label,percentage }) => {
  return <li key={id} className={s.statsListItem}>
      <span >{label}</span>
      <span >{percentage}</span>
    </li>
}

const StatsList = ({ items }) => {
  if(items.lenght ===0) return null
  return <ul className={s.statsList}>
    {items.map(StatsListItems)}
  </ul>
}

const Statistics = ({items }) => {
  return <section className={s.statictics}>
  <h2 >Upload stats</h2>
    <StatsList items={items} />
    </section>
  
}


Statistics.propType = {
  id:PropTypes.string,
  label:PropTypes.string,
  percentage:PropTypes.string,
}


export default Statistics