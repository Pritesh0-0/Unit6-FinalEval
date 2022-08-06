import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import "./HomePage.css"
 import { useNavigate} from "react-router-dom";

 const Cart = () => {
 const [data,setData]=useState([])
 let navigate = useNavigate();

useEffect(()=>{
  loadData()
},[])


const loadData=()=>{
  fetch('http://localhost:8080/cart')
  .then(response => response.json())
  .then(data => setData(data)); 
}
  return (
    <div className='container'>
    <table>
        <thead>
          <tr>
            <td>brand</td>
            <td>category</td>
            <td>image</td>
            <td>price</td>
            <td>title</td>
          </tr>
        </thead>
        <tbody>
        {
          data.map((ele)=>{
            return(<>
              <tr>
                <td>{ele.brand}</td>
                <td>{ele.category}</td>
                <td><img src={ele.image} alt="" /></td>
                <td>{ele.price}</td>
                <td>{ele.title}</td>
                <td><button>↑</button></td>
                <td><button>1</button></td>
                <td><button>↓</button></td>
                <td><button>✘</button></td>
              </tr>
            </>)
          })  
        }
        </tbody>
        
    </table>
      
       
    </div>
  )
}

export default Cart