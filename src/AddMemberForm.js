import React, { useState } from 'react'

const AddMemberForm = (props) => {
    const initialFormState = {
        id: null ,
        name: '' ,
        username: ''
    }
    const [member , setMember] = useState(initialFormState);

   const handleChange =  (e) => {
        const {name, value} = e.target;


        setMember({
            ...member, [name] : value
        })
    }


    return (
        <div className="formlist" >
                <form onSubmit = { (e) => {
                    e.preventDefault()
                    
                    if (!member.name || !member.username) return 


                    props.addMember(member)
                    setMember(initialFormState)
                }

                } >
                    <label><strong>Name</strong></label>
                    <input type= "text" name = "name" value = {member.name} onChange = {handleChange} />
                    <label><strong>Username</strong></label>
                    <input type= "text" name = "username" value = {member.username} onChange = {handleChange}  />
                    <button className= "add">Add New Member</button>              
                </form>   
        </div>
    )
}

export default AddMemberForm
