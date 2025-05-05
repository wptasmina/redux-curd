import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"


export default function Home() {
  const users = useSelector(state => state.users)
  console.log(users)


  return (
    <div className="">
      <h2 className="text-4xl font-bold text-gray-800">CURE App with json server</h2>
      <Link to="/create">
        <button className="my-8 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded cursor-pointer">Create+</button>
      </Link>

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
                  <Link to={``} className="text-white bg-red-500 px-4 py-1 rounded">Delete</Link>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
