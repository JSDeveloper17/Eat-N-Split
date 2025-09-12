import { Friend } from "./Friend.jsx";


export const FriendList = ({friends, onSelect, selectedFriend}) => {

  return (
    <ul>
        {friends.map((friend)=>(
            <Friend friend={friend}
                    key={friend.id}
                    onSelect={onSelect}
                    selectedFriend={selectedFriend}
            />
        ))}
    </ul>
  )
}
