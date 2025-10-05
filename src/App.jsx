
import { useState } from 'react';
import './App.css'
import { AddFriendForm } from './components/AddFriendForm.jsx';
import { Button } from './components/Button.jsx';
import { FormSplitBill } from './components/FormSplitBill.jsx';
import { FriendList } from './components/FriendList.jsx';

const initialFriends = [
  {
    id: 118836,
    name: "Amara",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [show, setShow] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleAddFriend(friend){
    setFriends([...friends, friend])
    setShow(false)
  }
  function handleSelcection(friend){
    //setSelectedFriend(friend)
    setSelectedFriend((current)=> current?.id=== friend.id ? null : friend)
    setShow(false)
  }
  function handleSplitBill(value){
    //console.log(value)
    setFriends(friends => friends.map((friend)=>
      friend.id ===selectedFriend.id 
        ? {...friend, balance:friend.balance +value}: friend
    ))
    setSelectedFriend(null)
  }
    return (
    <div className='app'>

      <div className='sidebar'>
         <FriendList friends={friends} onSelect={handleSelcection} selectedFriend={selectedFriend} />   
         {show && <AddFriendForm onAddFriend={handleAddFriend}/> }
         <Button show={show} onClick={() => setShow(!show)}>{show ? "Close":"Add Friend"}</Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} key={selectedFriend.id} onSplitBill={handleSplitBill}/>}
    </div>
  )
}

export default App
