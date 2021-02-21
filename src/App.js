
import { useState } from 'react';
import AddMemberForm from './AddMemberForm';
import './App.css';
import EditMemberForm from './EditMemberForm';
import MembersTable from './MembersTable';



const  App = () => {


  const membersData = [
    {
      id: "1",
      name:"Emmer",
      username:"emerrhill"

    },
    {
      id: "2",
      name:"kenster",
      username:"kenma"

    },
   

  ]
  const [members, setMembers] = useState(membersData);

  const addMember = (member) => {
    member.id= members.length + 1
    setMembers([...members, member])
  }
  const deleteMember = (id) => {
    editing ? console.log("You cant") : 
    setMembers(members.filter((member) => member.id !== id))
  
  }
  const [editing, setEditing] = useState(false)
  const initialFormState = {
    name: "",
    id: "",
    username: ""
  }
  const [currentMember, setCurrentMember] = useState(initialFormState)
  const editRow = (member) => {
    setEditing(true)

    setCurrentMember({id: member.id ,name: member.name,
      username: member.username}
      )
  }
  const updateMember = (id, updatedMember) => {
    setEditing(false)

    setMembers(members.map((member) => (member.id === id ? updatedMember : member)))

  }

  return (
     <div className="appbg"> <h1>CRUD App with Hooks</h1>
    <div className="App">
      {editing ?( <div className = 'twocol' > <h2>Update Member</h2> <EditMemberForm setEditing= {setEditing} updateMember= {updateMember} currentMember = {currentMember} /> </div>)
      :
       (<div className="twocol" ><h2>Add Members</h2>
      <AddMemberForm  addMember={addMember} /></div>)}
      <div className="twocol" ><h2>View Members</h2>
      <MembersTable members ={members} deleteMember={deleteMember} editRow= {editRow} /></div>
  
   
    </div>
    </div>
  );
}

export default App;
