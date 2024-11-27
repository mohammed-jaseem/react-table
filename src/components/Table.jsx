import React from 'react'
import './Table.css'

export default function table() {
    const details=[{id:1, name:"jasseem",place:"tirur",number:"9846827885", email:"jasseem@gmail.com"},
                   {id:2, name:"migdad",place:"valanchery",number:"897896663", email:"migdad@gmail.com"},
                   {id:3, name:"mahshooq",place:"thrissur",number:"9887655244", email:"mahshooq@gmail.com"},
                   {id:4, name:"anshif",place:"vengad",number:"670965564", email:"anshif@gmail.com"}]

  return (
    <div>
      <table className='border-2 mx-auto mt-10' style={{ width: '60%', borderCollapse: 'collapse' }}>
        <thead>
            <tr className='w-full'>
              <th className='border-2 p-2'>ID</th>
              <th className='border-2 p-2'>Name</th>
              <th className='border-2 p-2'>Place</th>
              <th className='border-2 p-2'>Number</th>
              <th className='border-2 p-2'>Email</th>
            </tr>
        </thead>
        <tbody>
            {details.map(item => (
              <tr style={{textAlign:"center"}} key={item}>
              <td className='border-2 p-2'>{item.id}</td>
              <td className='border-2 p-2'>{item.name}</td>
              <td className='border-2 p-2'>{item.place}</td>
              <td className='border-2 p-2'>{item.number}</td>
              <td className='border-2 p-2'>{item.email}</td>
            </tr>
            ))}
        </tbody>
      </table>

      <div>
        <h1 className='text-center mt-14 text-[20px] font-[700]'>CARDS</h1>
      </div>
        <div className='flex justify-between mt-[50px]'>
        {details.map(item => (
            <div className='border-2 border-black p-2 mr-5 ml-5 mb-5'key={item}>
                <img className='mx-auto mt-10' src="https://www.w3schools.com/w3css/img_avatar.png" alt="Avatar" style={{width:"40%"}} />
                <h2 className='p-2 mx-auto mt-10'>name:{item.name}</h2>
                <p className='p-2'>place:{item.place}</p>
                <p className='p-2'>number:{item.number}</p>
                <p className='p-2'>email:{item.email}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

