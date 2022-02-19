import React from 'react'

import axios from 'axios'

import {Link,useNavigate, NavLink} from 'react-router-dom'

 import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
 
import Typography from '@mui/material/Typography';
import { useState, useEffect ,useContext} from "react";
import { AuthContext } from '../context/AuthContext.js';
 import './header.css'
 import './main.scss'
 import './login.css'
import { Button } from '@mui/material';


export default function Main() {

const[books,setBooks] = useState("")
const[bookData, setBookData] = useState("")
const[open,setOpen] = useState(false)
const[open2,setOpen2] = useState(false)
const[show1,setShow1] = useState(false)
const[show,setShow] = useState(false)
  const {user} = useContext(AuthContext);
  const handleOpen = () => {
setShow(true)
  }; 

  const handleOpen2 =()=>{

    setShow1(true)
  }
  const handleClose = () =>{

 setShow(false)

  }
  const history = useNavigate();
 const changeBook = (e) =>{
   setBooks(e.target.value)
 }
const usersList = [
 {
  name : "yash",
  email : "yashraj@gmail.com",
  password : "yashraj"


},
{
  name : "manu",
  email : "manuraj@gmail.com",
  password : "manu"
},
{

  name : "sai",
  email : "sai@gmail.com",
  password : "sai"
},
]

const allProducts = [{
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
name: "book4",
qnt : 1,
price: 6,
image: 'images/81CXeKED8yL.jpg'
},
{
id: 15,
name: "book5",
qnt : 1,
price: 6,
image: 'images/91S+nNHdHSL.jpg'
},

{
id: 5,
name: "book6",
qnt : 1,
price: 6,
image: 'images/220px-The_Road_Ahead_(Bill_Gates_book).jpg'
},
{
id: 6,
name: "book7",
qnt : 1,
price: 6,
image: 'images/711tJ6aX-SL.jpg'
},
{
id: 7,
name: "book8",
qnt : 1,
price: 6,
image: 'images/18046260.jpg'
}, {
id: 8,
name: "book9",
qnt : 1,
price: 6,
image: 'images/bhyr-square-orig.jpg'
},
{
id: 9,
name: "book10",
qnt : 1,
price: 6,
image: 'images/download (1).jpg'
},
{
id: 10,
name: "book11",
qnt : 1,
price: 6,
image: 'images/download (2).jpg'
},
{

id: 11,
name: "book12",
qnt : 1,
price: 6,
image: 'images/download (3).jpg'
},
{
id: 12,
name: "book12",
qnt : 1,
price: 6,
image: 'images/download.jpg'
},
{
id: 13,
name:"book13",
qnt : 1,
price: 6,
image: 'images/GOT-Books.jpg'
},
{
id: 14,
name: "book14",
qnt : 1,
price: 6,
image: 'images/The-Subtle-Art-of-Not-SDL386049682-1-81665.jpg'
}]

    const inspiration = [
        {
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
        name: "book4",
        qnt : 1,
        price: 6,
        image: 'images/81CXeKED8yL.jpg'
    },
  ]
const fiction = [

    {
        id: 5,
        name: "book6",
        qnt : 1,
        price: 6,
        image: 'images/220px-The_Road_Ahead_(Bill_Gates_book).jpg'
    },
    {
        id: 6,
        name: "book7",
        qnt : 1,
        price: 6,
        image: 'images/711tJ6aX-SL.jpg'
    },
    {
        id: 7,
        name: "book8",
        qnt : 1,
        price: 6,
        image: 'images/18046260.jpg'
    }, {
        id: 8,
        name: "book9",
        qnt : 1,
        price: 6,
        image: 'images/bhyr-square-orig.jpg'
    },
    {
        id: 9,
        name: "book10",
        qnt : 1,
        price: 6,
        image: 'images/download (1).jpg'
    },
    {
        id: 10,
        name: "book11",
        qnt : 1,
        price: 6,
        image: 'images/download (2).jpg'
    }]
const selfhelp = [
    {
        id: 11,
        name: "book12",
        qnt : 1,
        price: 6,
        image: 'images/download (3).jpg'
    },
    {
        id: 12,
        name: "book12",
        qnt : 1,
        price: 6,
        image: 'images/download.jpg'
    },
    {
        id: 13,
        name:"book13",
        qnt : 1,
        price: 6,
        image: 'images/GOT-Books.jpg'
    },
    {
        id: 14,
        name: "book14",
        qnt : 1,
        price: 6,
        image: 'images/The-Subtle-Art-of-Not-SDL386049682-1-81665.jpg'
    },
    {
      id: 15,
      name: "book5",
      qnt : 1,
      price: 6,
      image: 'images/91S+nNHdHSL.jpg'
  }
      ];
      const mobiles = [

        {
        id :16,
        name : "iphone",
        qnt : 1,
        price : 100,
        image : 'images/iphone-13-family-select-2021.jpg'

        },

        {
          id: 17,
          name: "samsung",
          qnt : 1,
          price: 100,
          image : 'images/71F4jU7MRUS._SX466_.jpg'

        },

        {
          id: 18,
          name : "oneplus",
          qnt : 1,
          price : 100,
          image : 'images/61IwksZ-DGL._SX679_.jpg'
        },

        {
          id: 19,
          name : "nokia",
          qnt : 1,
          price : 100,
          image : 'images/download(4).jpg'

        },
        {

          id: 20,
          name : "oppo",
          qnt : 1,
          price : 100,
          image : 'images/F17 pro-navigation-blue-v2.png'

        },
        {
          id: 21,
          name : "MI",
          qnt : 1,
          price : 100,
          image : 'images/71VQXjN6R7S._SX679_.jpg'
        }
      ]

      const cartHelperFunctions = {

        deleteItem: (lineItemId) => {
           cart.remove(lineItemId)
                .then(res => {
                    setCart(res.cart)
                })
        },
        addQaunity: (lineItemId, newQuanity) => {
            cart.update(lineItemId, {qnt: newQuanity})
                .then(res => {
                    setCart(res.cart)
    
                })
        },
        subtractQuanity: (lineItemId, newQuanity) => {
    
            if (newQuanity === 0) {
                cartHelperFunctions.deleteItem(lineItemId)
            } else {
               cart.update(lineItemId, {qnt: newQuanity})
                    .then(res => {
                        setCart(res.cart)
                    })
            }
    
        }
    }
      const InspirationItems = ()=>{

        return(
          inspiration.map((el) => (
          
          <div key={el.id}>
            
            <img className = "cart__image"  alt ="" src={el.image} />
            {`${el.name}: $${el.price}`}
            <input type="submit" value="add" onClick={() => addToCart(el)} />
      
          </div>
        )));
        }
      
const FictionItems = () =>
      {      
          return(
          fiction.map((el) => (
          <div key={el.id}>
            
             <img key={el.id}  className = "cart__image" src={el.image} height = "20px" width = "20px" alt="pic"/>
            {`${el.name}: $${el.price}`}
             
            <input type="submit" value="add" onClick={() => addToCart(el)} />
           
            
          </div>  
        )));
          }

      
      const SelfHelpItems = () =>{
     
        
        return(
          selfhelp.map((el) => (
          <div key={el.id}>
            
             <img key={el.id}  className = "cart__image" src={el.image} height = "20px" width = "20px" alt="pic"/>
            {`${el.name}: $${el.price}`}
             
            <input type="submit" value="add" onClick={() => addToCart(el)} />
           
            
          </div>  
        )));
          }

          const Mobiles =()=>{
            return(
              mobiles.map((el) => (
              <div key={el.id}>
                
                 <img key={el.id}  className = "cart__image" src={el.image} height = "20px" width = "20px" alt="pic"/>
                {`${el.name}: $${el.price}`}
                 
                <input type="submit" value="add" onClick={() => addToCart(el)} />
               
                
              </div>  
            )));


          }

          const Checkout =()=>{
   
  alert("Your Order has been Placed ")

 setCart([])
    handleClose()
          }
          

  
      const style = {
        position:'absolute',
         width:200,
         bgcolor: 'background.paper',
        border: '2px solid #000',
         height:'100%',
        overflow:'scroll'
       
        
      };
   /*   const Header = () => {
        return (
          <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
              <div className="nav-title">Avengers Bookstore</div>
              <Link to ='/login'>
              <Button>LogOut</Button>
              </Link>
              <button className ="inside" onClick={openModal}> <img src = "images/icons8-cart-24.png" alt="icon"/> {cart.length===0? <p> </p> : cart.length}</button>
         *   </div>
            <div className="nav-btn">
            
            </div>
            
            <div className="nav-links">
             
            <div className="item">
        
          
        
      </div>
                    
            </div>
          </div>
        );
      };
      */

     
 


    const Header = ()=>
    {
           return(
            <div className="header">

            <nav className="nav">
              <div className="logo">MarketPlace for All your Shopping Needs</div>
            
              <ul>
                <li><Link to ='/login'>
              <Button>LogOut</Button>

              </Link>
             </li>

              <button className ="inside" onClick={openModal}> <img src = "images/icons8-cart-24.png" alt="icon"/> {cart.length===0? <p> </p> : cart.length}</button>
                
              </ul>
            </nav>
          
          </div>


            ); }

  
      const openModal = () =>{
    
        setOpen(true)
      }
    
      const closeModal = ()=>
      {
         setOpen(false)
      }
     const[cartTotal,setCartTotal] = useState(0)
      const [cart, setCart] = useState([]);
      useEffect(() => {
        total();
      },
       [cart]);
     const addToCart = async(item) =>
       {
      const check_index = cart.findIndex((cartItem)=> cartItem.id===item.id)
           if(check_index!==-1)
      {
     
       cart[check_index].qnt = (cart[check_index].qnt)+1
      }
      else
     setCart((currentCart) => [...currentCart, item]);
  
      
        
       }
       const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
          totalVal += (cart[i].price * cart[i].qnt);
        }
        setCartTotal(totalVal);
      };
 
      const cartItems =  cart.map((el) => (
      
        <div key={el.id} >
          
         <div className="insidecart">
           <div className = "inline">
              
          <img className = "new" src = {el.image} alt = "pic"/>
             <h3>{`${el.qnt}`}</h3>
             <input type = "button" value = "+" onClick = {()=>{Increment(el)}}/>
             {`${el.name}: $${ `${el.price}` * `${el.qnt}`}`}
             <input type = "button" value = "-" onClick = {()=>{Decrement(el)}}/>         
           
          <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
          
          </div>
            </div>
            
        </div>
    
      ));
      const Increment =(item) =>{

 setCart((currentCart)=>{

  const check_index = currentCart.findIndex((cartItem)=> cartItem.id===item.id)
if(check_index===-1){
  return currentCart
}
currentCart[check_index].qnt = (currentCart[check_index].qnt)+1
  return [...currentCart]
 })
 
      }

      const Decrement =(item) =>{
        setCart((currentCart)=>{
      
        const check_index = currentCart.findIndex((cartItem)=> cartItem.id===item.id)
      if(check_index===-1){
        return currentCart
      }
     
  
      currentCart[check_index].qnt = (currentCart[check_index].qnt)-1
     
     
        return [...currentCart]
       })
       }
      const removeFromCart =(item) => {
        setCart((currentCart) => {
          const indexOfItemToRemove = currentCart.findIndex(
            (cartItem) => cartItem.id === item.id
          );
    
          if (indexOfItemToRemove === -1) {
            return currentCart;
          }
    
          return [
            ...currentCart.slice(0, indexOfItemToRemove),
            ...currentCart.slice(indexOfItemToRemove + 1),
          ];
        });
       
      };
    return (

      <>
    
       <Header />
       
 <div className= "demo-6">
    
        Welcome {user.name} to your personal shopping mall.
        Select Items to Continue Shopping.Click on Cart to view Items.
    
 </div>
      <div className="container">
        <div className = "grid_container">
          
             <div className = "grid_items">
                <h3>Fiction Category </h3>
               <FictionItems/>
             </div>
             <div className = "grid_items">
               <h3>Inspirational Category</h3>
               <InspirationItems/>
             </div>
             
             <div className = "grid_items">
             <h3>Self Help Category</h3>
               <SelfHelpItems/>
             </div>
           <p> Your Total is ${cartTotal}</p>
           <input className = "loginInput"type = "text" onChange = {changeBook} placeholder='Search'/>
             <button  className = "inside" type = "submit" onClick = {handleOpen}>Submit</button> 
             
          
         </div>
         <div className = "grid_container">
         <div className = "grid_items">
           <h3>Mobiles</h3>
            <Mobiles/>
          </div>
          </div>
         <div >
         

 
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>
            CART
          </h2>
            
          {cartItems}
                 
          TOTAL IS ${cartTotal}
        <Button  onClick = {()=>{Checkout();closeModal();}}> CheckOut </Button>
        </Box>
 
      </Modal>
     
     
        </div>          
              
        </div>

            
         

        
        

        
   
</>
    )
}
