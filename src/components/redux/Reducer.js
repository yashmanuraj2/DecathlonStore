import * as actionTypes from "./actiontypes.js";


const  INITIAL_STATE = 
{
  products :[   
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
,
 cart :  [],
 currentItem : null
}
const shopReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUST_ITEM_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default shopReducer;