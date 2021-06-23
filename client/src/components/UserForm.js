import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const UserForm = (props) => {
    // not destructoring form fields so I can names  in useState
    const { id, addUser, updateUsers  } = props
    const [name, setName] = useState(props.name ? props.name : '')
    const [level, setLevel] = useState(props.level ? props.level: '')
    const getFormName = () =>{
      return id ? 'EditFORM' : 'NEW Form'
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let user = {name, level} 
        console.log(user)
        if(id){
            let res = await axios.put(`/api/users/${id}`, user)
            console.log(res)
            updateUsers(res.data)
        } else {
            let res = await axios.post('/api/users', user)
            console.log(res)
            addUser(res.data)
        }
    }
    return(
        <>
          <h1>{getFormName()}</h1>
          <form onSubmit={handleSubmit}>
              <p>User Name</p>
              <input value={name} onChange={(e)=> setName(e.target.value) } /> 
              <p>Level</p>
              <input value={level} onChange={(e)=> setLevel(e.target.value) } /> 
              <br /> 
              <button type={'submit'}>{id ? 'add': 'update'}</button>
          </form>
        </>
    )
}
export default UserForm