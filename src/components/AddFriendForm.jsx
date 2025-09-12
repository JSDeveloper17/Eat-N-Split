import { useState } from "react"
import { Button } from "./Button.jsx"

export const AddFriendForm = ({onAddFriend}) => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")

  const id = crypto.randomUUID()
  
  function handleSubmit(e){
    e.preventDefault();

    if(!name || !image) return;

    const newFriend = {
      id,
      name,
      image:`${image}?u=${id}`,
      balance:0,
    }
    console.log(newFriend)
    onAddFriend(newFriend)
    
    setName("")
    setImage("https://i.pravatar.cc/48")

  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="">🧑‍🤝‍🧑Friend Name</label>
        <input type="text" value={name} onChange={e=> setName(e.target.value)} name="" id="" />

        <label htmlFor="">🖼️ Image URL</label>
        <input type="text" value={image} onChange={e=> setImage(e.target.value)} name="" id="" />

        <Button>Add</Button>
    </form>
  )
}
