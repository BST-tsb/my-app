import React from "react"
import AccountCont from "./accountCont"
import { useSelector } from "react-redux"
import { putProfil } from "../../store/store"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { editProfil } from "../../store/store"
import transaction from "../../data/transactions.json"
import { Navigate } from "react-router-dom"



export default function Account() {
  
 
  const dispatch = useDispatch()
  const [newFirstName, setFirstName] = useState('')
  const [newLastName, setLastName] = useState('')
  const userToken = useSelector((state) => state.token)
  const request = { Authorization: `Bearer ${userToken}` }
  const firstName = useSelector((state) => state.firstName)
  const lastName = useSelector((state) => state.lastName)
  const [isEditing, setEditing] = useState(false)

  const submitProfil = (event) => {
    const user = {
      firstName: newFirstName,
      lastName: newLastName
    }
    event.preventDefault()
    putProfil(user, request)
    .then((response) => {
      if(response.status === 200){
        dispatch(editProfil(user))
      }
      setEditing(false)
    })
  }
  return (
    
    <div>
      {!userToken ? (
      <Navigate to="/" />
      ) : (
      <main className="main bg-dark">
        <div className="header">
            <h1>Welcome back<br />{`${firstName} ${lastName}`}</h1>
            <button className="edit-button" onClick={() => {setEditing(true)}}>Edit Name</button>
          { isEditing &&
            <form id="formUserPage" onSubmit={(event) => submitProfil(event)}>
              <div className="input-wrapper">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" id="firstname" placeholder={firstName} onChange={(event) => setFirstName(event.target.value)}/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" id="lastname" placeholder={lastName} onChange={(event) => setLastName(event.target.value)}/>
              </div>
              <div className="input-wrapper flex-row">
                <button className="edit-button" type="submit">SAVE</button>
                <button className="edit-button" onClick={() => {setEditing(false)}}>CANCEL</button>
              </div>
            </form>
          }
        </div>
        <h2 className="sr-only">Accounts</h2>
        {transaction.map((transaction, index) => (
                <AccountCont 
                    title={transaction.title}
                    amount={transaction.amount}
                    amountDescription={transaction.amountDescription}
                    key={`account_${index}`}
                />
            ))}
    </main>
      )}
  </div>      
  )
}