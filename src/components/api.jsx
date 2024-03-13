import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import logo from '../logo.svg';
function Api() {
 const [items,setItems] = useState([])

 useEffect(()=>{
    axios.get("http://127.0.0.1:8000/api/category/list")
    .then((response)=>{setItems(response.data)})
    .catch((error)=>{console.error("error",error)})
 },[])

  return (
    <div>
       <table style={{border:"1px solid black"}}>
        <thead>
            <tr>
            <th>image </th>
            <th>name</th>
            </tr>
            
        </thead>
        <tbody>
            {items.map((item)=>(
                <tr key={item.index}>
                <td>
                    {item.image ?(
                      <img src={`http://127.0.0.1:8000${item.image}`} alt={`${item.name} category`} className="table-image" width={100} />

                    ):(
                        <img src={logo} alt="none-img" className="table-image" width={100} />

                    )}
                </td>
                <td>{ item.name}</td>
            </tr>
            ))}
            
        </tbody>
       </table>
       
    </div>
  )
}

export default Api