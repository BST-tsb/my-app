import React from "react"

export default function AccountCont( { title, amount, amountDescription}) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{ title }</h3>
        <p className="account-balance">{ amount }</p>
        <p className="account-amount-description">{ amountDescription }</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}