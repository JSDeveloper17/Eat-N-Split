import { useState } from "react"
import { Button } from "./Button.jsx"


export const FormSplitBill = ({selectedFriend, onSplitBill}) => {
  const [bill, setBill] = useState("")
  const [paidByUser, setPaidByUser] = useState("")
  const paidByFriend = bill ? bill-paidByUser : ""
  const [whoIsPlaying, setWhoIsPayeing] = useState("user")

  function handleSubmit(e){
    e.preventDefault();
    if(!bill || !paidByUser) return;

    onSplitBill(whoIsPlaying ==="user" ? paidByFriend : -paidByUser)
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

        <label htmlFor="">💵 Bill Value</label>
        <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))} name="" id="" />

        <label htmlFor="">🧍🏻‍♂️Your expense</label>
        <input type="text" value={paidByUser} onChange={(e)=>
          setPaidByUser(Number(e.target.value) > bill ? paidByUser :Number(e.target.value) )} name="" id="" />

        <label htmlFor="">🧑‍🤝‍🧑{selectedFriend.name}'s expenses</label>
        <input type="text" disabled value={paidByFriend}  name="" id="" />

        <label htmlFor="">🤑Who is paying the bill</label>
        <select value={whoIsPlaying} onChange={(e)=>setWhoIsPayeing(e.target.value)} name="" id="">
            <option value="user">you</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>

        <Button>Split Bill</Button>
    </form>
  )
}
