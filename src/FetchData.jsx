import React from 'react'
import './App.css'
import axios from 'axios'
import  {useEffect, useState} from 'react';

const FetchData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    
      
    }, [])
    
  return (
    <div className='container'>
        <div className='details'>
            <h3>Fetch Data From API In React with Axios</h3>
            <table className='table'>
                <thead>
                    <tr className='header'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>

                    </tr>
                </thead>
                <tbody className='data-container'>
                    {
                        data.map((user, index) => {
                            return <tr key={index} className='data'>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        }) 
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default FetchData