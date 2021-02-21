import React, { useEffect, useState } from 'react'



const EditMemberForm = (props) => {

    const [member,setMember] = useState(props.currentMember)
     const handleChange =  (e) => {
        const {name, value} = e.target;


        setMember({
            ...member, [name] : value
        })
    }
    useEffect( () => {
        setMember(props.currentMember)} , [props]
    )


    return (
        <div>
            <form onSubmit = { (e) => {
                    e.preventDefault()
                    
                    


                    props.updateMember(member.id, member)
                    
                }

                } >
                    <label><strong>Name</strong></label>
                    <input type= "text" name = "name" value = {member.name} onChange = {handleChange} />
                    <label>Username</label>
                    <input type= "text" name = "username" value = {member.username} onChange = {handleChange}  />
                    <button className="update">Update Member</button>              
                    <button className="delete" onClick={() => props.setEditing(false)}>Cancel</button>              
                </form>  
        </div>
    )
}

export default EditMemberForm
