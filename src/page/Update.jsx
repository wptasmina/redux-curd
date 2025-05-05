import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../redux/features/users/userReduserSlice'

export default function Update() {
  const {id} = useParams()
  const users = useSelector(state => state.users)
  const navigate = useNavigate()

  const exitingUser = users.filter(f => f.id == id)
  const {name, email} = exitingUser[0]
  const [uname, setUname] = useState(name) 
  const [uemail, setUemail] = useState(email) 

  const dispatch = useDispatch()

  const handleSubmit = (e) =>  {
    e.preventDefault()
     dispatch(updateUser(
      {id: id,
       name: uname, 
       email: uemail}))

        navigate('/')
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-amber-50'>
      <div className='bg-gray-500 w-1/2 py-10 rounded-md shadow'>
      <h2 className="text-3xl text-white font-bold pb-6">Update User</h2>

        <form onSubmit={handleSubmit} className="space-y-4 w-1/2 mx-auto">
          <div className="flex flex-col text-left">
            <label htmlFor="" className="pb-2">Name</label>
            <input onChange={(e)=> setUname(e.target.value)} value={uname} type="text" placeholder='name' className='border border-gray-300 text-white px-4 py-2 rounded-md outline-none focus:outline-none' />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="" className="pb-2">Email</label>
            <input onChange={(e)=> setUemail(e.target.value)} value={uemail} type="email" placeholder='Email' className='border border-gray-300 text-white px-4 py-2 rounded-md outline-none focus:outline-none' />
          </div>
          <button className="bg-green-600 w-full py-2 text-white text-lg font-medium cursor-pointer rounded-md">Update</button>
        </form>
      </div>
    </div>
  )
}
