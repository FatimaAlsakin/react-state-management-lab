import { useState } from 'react'
import './App.css'

function App() {

  const availableItems = [
  {
    id: 1,
    name: "Black T shirt",
    price: 5
  },
  {
    id: 2,
    name: "Hanger Set",
    price: 8
  },
  {
    id: 3,
    name: "Thoub",
    price: 12
  },
  {
    id: 4,
    name: "Computer Bag",
    price: 20
  },
  {
    id: 5,
    name: "Couch",
    price: 50
  },
  {
    id: 6,
    name: "Gaming Chair",
    price: 70
  }
]

let shoppingCart = []

let availableBalance = 100

let message 

const [available , setAvailable] = useState(availableItems)
const [cart , setCart] = useState([])
const [balance , setBalance] = useState(availableBalance)
const [warningMessage , setWarningMessage] = useState(message)


function handleAddToCart(item){
  if(item.price < balance){
  const filterAvailable = available.filter((oneItem)=>{
    return oneItem.name !== item.name
  })

  setAvailable(filterAvailable)
  setCart([...cart , item])
  setBalance(balance - item.price)
  setWarningMessage()
}
else
  setWarningMessage('Insufficient funds. Your balance is too low to purchase this item')
}

function handleRemoveFromShoppingCart(item){
  const filterCart = cart.filter((oneItem)=>{
    return oneItem.name !== item.name
  })

  setAvailable([...available , item])
  setCart(filterCart)
  setBalance(balance + item.price)
}


  return (
    <>
      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance: {balance}</h2>
      <h2>{warningMessage}</h2>

      <h2>Available Items</h2>

      {available.map((item)=>
      <div key={item.name}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
        <button onClick ={()=>{handleAddToCart(item)}} >Add to cart</button>
      </div>
      )}

      <h2>Shopping Cart</h2>
      {cart.length === 0? <p>Cart Empty </p> : cart.map((item)=>
      <div key={item.name}>
        <h3>{item.name}</h3>
        <p>Price: {item.price}</p>
        <button onClick ={()=>{handleRemoveFromShoppingCart(item)}}>Remove from cart</button>
      </div>
      )}

      
    </>
  )
}

export default App
