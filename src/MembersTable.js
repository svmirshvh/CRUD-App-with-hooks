


import React from 'react'

 const  MembersTable = (props) => {
     return (
            <table className= "memberslist">
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody> 
                            {
                                props.members.length > 0 ? ( props.members.map((member) => (
                                    <tr>
                                    <td key = {member.id}> {member.name} </td>
                                    <td>{member.username}</td>
                                    <td><button className="edit" onClick= {()=> props.editRow(member)}>Update</button><button className="delete" onClick ={() => props.deleteMember(member.id)} >Delete</button></td>
                                    </tr>
                                )) ) : (
                                    <tr>
                                    <td colSpan= {3}>No Members</td>
                                    </tr>
                                )
     
                            }
                        
                </tbody>
            </table> )
    
                        }

export default MembersTable