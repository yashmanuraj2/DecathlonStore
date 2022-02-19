import React from 'react'
import './main.scss'
export default function Fiction() {
   const books =  [ {
        id: 1,
        name: "book1",
        price: 5,
        qnt : 1,
       image:'images/51susWh6zkL.jpg'
      },
  
      {
        id: 2,
        name:  "book2",
        qnt : 1,
  
        price: 6,
        image: 'images/61lGw70GGzL.jpg'
      },
      {
        id: 3,
        name: "book3",
        qnt : 1,
        price: 6,
        image: 'images/71AdHA+qqwL.jpg'
      },
      {
      id: 4,
      name: "book3",
      qnt : 1,
      price: 6,
      image: 'images/81CXeKED8yL.jpg'
  },
  {
  id: 15,
  name: "book3",
  qnt : 1,
  price: 6,
  image: 'images/91S+nNHdHSL.jpg'
}]

   

return (
    books.map((el,props) => (
    
        <div key={el.id}>
          
          <img className = "cart__image"  alt ="" src={el.image} />
          {`${el.name}: $${el.price}`}
          <input type="submit" value="add" onClick={props.addtocart} />
    
        </div>
      ))
    )
}
