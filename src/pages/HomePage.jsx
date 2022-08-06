import React, { useEffect, useState } from 'react'
import axios from 'axios'
 import "./HomePage.css"
 import { useNavigate} from "react-router-dom";

 const HomePage = () => {
 const [data,setData]=useState([])
 let navigate = useNavigate();

useEffect(()=>{
  loadData()
},[])


const loadData=()=>{
  fetch('http://localhost:8080/products')
  .then(response => response.json())
  .then(data => setData(data)); 
}


 

const Details=(id)=>
{ 
   navigate("/ProductDetails/"+id);
}

const AddToCart=(cartData)=>{
 
fetch('http://localhost:8080/cart', {
  method: 'POST',  
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(cartData),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
  alert("added sucessfully")
})
.catch((error) => {
  console.error('Error:', error);
});

}


 

  return (
    <div className='container'>
      {
        data.map((res)=>{
          return(<>
          <div className='card'>
            <p className='brand'>{res.brand}</p> 
            <p>{res.title}</p> 
            <p>{res.category}</p> 
            <p>Price: {res.price} ₹</p>
            <img src={res.image} alt="" className='img'/> 
             <button onClick={()=>Details(res.id)}>Details</button>
             <button onClick={()=>AddToCart(res)}>Add To Cart</button>
          </div>
          </>)
        })
      }
    </div>
  )
}

export default HomePage