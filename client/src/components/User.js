import UserForm from "./UserForm"


const User = (props) => {
    const {name, level, deleteUser, id} = props

    return (
        <>
            <p>User: {name} Level:{level}</p>
            <button onClick={()=>deleteUser(id)}>Delete</button>
            <UserForm {...props}/>
            <hr />
        </>
    )
}

export default User