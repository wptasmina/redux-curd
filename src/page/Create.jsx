

export default function Create() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-amber-50'>
      <div className='bg-gray-500 w-1/2 py-10 rounded-md shadow'>
        <form className="space-y-4 w-1/2 mx-auto">
          <div className="flex flex-col text-left">
            <label htmlFor="" className="pb-2">Name</label>
            <input type="text" placeholder='name' className='border border-gray-300 px-4 py-2 rounded-md outline-none focus:outline-none' />
          </div>
          <div className="flex flex-col text-left">
            <label htmlFor="" className="pb-2">Email</label>
            <input type="text" placeholder='Email' className='border border-gray-300 px-4 py-2 rounded-md outline-none focus:outline-none' />
          </div>
          <button className="bg-green-600 w-full py-2 text-white text-lg font-medium cursor-pointer rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}
