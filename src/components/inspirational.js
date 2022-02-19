import React from 'react'
import './main.scss'
import { useState, useEffect } from "react";

export default function Inspirational() {

    const books = [ {
        id: 6,
        name: "book3",
        qnt : 1,
        price: 6,
        image: 'images/711tJ6aX-SL.jpg'
    },
    {
        id: 7,
        name: "book3",
        qnt : 1,
        price: 6,
        image: 'images/18046260.jpg'
    }, {
        id: 8,
        name: "book3",
        qnt : 1,
        price: 6,
        image: 'images/bhyr-square-orig.jpg'
    },
    {
        id: 9,
        name: "book3",
        qnt : 1,
        price: 6,
        image: 'images/download (1).jpg'
    },
    {
        id: 10,
        name: "book3",
        qnt : 1,
        price: 6,
        image: 'images/download (2).jpg'
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
