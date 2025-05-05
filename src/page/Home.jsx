import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../redux/features/users/userReduserSlice"


export default function Home() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }


  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800">CRUD App with json server</h2>
      <div className="text-left mt-8 mb-4">
      <Link to="/create">
        <button className=" px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded cursor-pointer">Create+</button>
      </Link>

      </div>
      <table className="table border border-gray-300 border-separate rounded-t-lg w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-center">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td className="text-center">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="space-x-2 flex">
                  <Link to={`/edit/${user.id}`} className="text-white bg-blue-700 px-4 py-1 rounded">Edit</Link>
                  <button onClick={() => handleDelete(user.id)} className="text-white cursor-pointer bg-red-500 px-4 py-1 rounded">Delete</button>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
