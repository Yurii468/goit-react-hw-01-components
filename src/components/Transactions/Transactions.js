import React from 'react'
import PropTypes from 'prop-types'


import s from './Transactions.module.css'


const TransactionTr = ({ id, type, amount, currency },i ) => {
  const trClassName = i % 2 === 0 ? s.grey : s.white
    return  <tr key={id} className={trClassName}>
      <td className={s.transactionsListItem}>{type}</td>
      <td className={s.transactionsListItem}>{amount}</td>
      <td className={s.transactionsListItem}>{currency}</td>
    </tr>
}

const TransactionBody = ({ items }) => {
    if (items.lenght === 0) return null
    return <tbody >{items.map(TransactionTr) }</tbody>
    
}


const Transactions = ({transactions }) => {
    return <table className={s.transactions}>
  <thead>
    <tr className={s.transactionsList}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <TransactionBody items={transactions }/>

</table>
}

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,})

  )}



  
 


export default Transactions