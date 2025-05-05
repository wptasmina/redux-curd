import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../redux/features/users/userReduserSlice"
import { useNavigate } from "react-router-dom"


export default function Create() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('') 
  const navigate = useNavigate()
  const users = useSelector(state => state.users)

  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addUser({id: users[users.length -1].id + 1, name, email}))
    navigate('/')
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-amber-50'>
      <div className='bg-gray-500 w-1/2 py-10 rounded-md shadow'>
      <h2 className="text-3xl text-white font-bold pb-6">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4 w-1/2 mx-auto">
          <div className="flex flex-col text-left">
            <label htmlFor="" className="pb-2">Name</label>
            <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='name' className='border border-gray-300 text-white px-4 py-2 rounded-md outline-none focus:outline-none' />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="" className="pb-2">Email</label>
            <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Email' className='border border-gray-300 text-white px-4 py-2 rounded-md outline-none focus:outline-none' />
          </div>
          <button className="bg-green-600 w-full py-2 text-white text-lg font-medium cursor-pointer rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}
