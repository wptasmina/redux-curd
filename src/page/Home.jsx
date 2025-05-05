import { useSelector } from "react-redux"
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

      <table className="table border border-gray-300 border-separate rounded-t-lg w-full text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="space-x-4">
                  <button>Edit</button>
                  <button>Delete</button>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
