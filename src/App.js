import React, { useState } from "react";
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Header from "./common/Header/Header.jsx";
import "./App.css"
import Pages from "./common/Pages/Pages.jsx";
import Data from "./components/FlashDeals/Data.js"
import Cart from "./common/Cart/Cart.jsx";
import Sdata from "./components/Shop/Sdata.js";
import Footer from "./components/Footer/Footer.jsx";
function App() {

  const {productItems} = Data
    const {shopItems} = Sdata
  const [cartItem,setCardItem] = useState([])
  const addToCart = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit){
      setCardItem(cartItem.map((item) =>
      (item.id === product.id ? { ...productExit, qty: productExit.qty +1 } : item)))
    }else{
      setCardItem([...cartItem,{...product,qty:1}])
    }
  }

  const decreaseQty = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty  === 1){
      setCardItem(cartItem.filter((item) => item.id !== product.id))

    }
    else{
      setCardItem(cartItem.map((item) => (item.id === product.id? {...productExit,qty: productExit.qty-1} : item)))
    }
  }
  return (
   <>
   <Router>
    <Header cartItem = {cartItem}/>
   <Switch> 
    <Route path ="/" exact>
        <Pages productItems = {productItems} addToCart ={addToCart} shopItems={shopItems}/>
    </Route> 
    <Route path ="/cart" exact>
        <Cart cartItem = {cartItem} addToCart ={addToCart} decreaseQty={decreaseQty}/>
    </Route> 
    </Switch>
    <Footer/>
   </Router>
  
   </>
  );
}

export default App;
