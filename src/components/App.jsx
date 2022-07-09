import Profile from "../components/Profile";
import Statistics from "../components/Statistics/index";
import FriendList from "../components/FriendsList/index";
import TransactionHistory from "../components/TransactionHistory";
import user from "../../src/user.json"
import data from "../../src/data.json"
import friends from "../../src/friends.json"
import transactions from "../../src/transactions.json"

export const App = () => {
  return (
    <div 
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor:'lightgray',
        position: "absolute",
        width: "100vw",
        flexDirection:"column",
        padding: "100px",
        boxSizing:"border-box"
      }}
    >
    
    <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics 
            title="Upload stats" 
            stats={data} 
        />
        <Statistics stats={data} />
        <FriendList
            friends={friends}
        />
        <TransactionHistory 
            items={transactions}
        />

    
    
     
    </div>
  );
};
