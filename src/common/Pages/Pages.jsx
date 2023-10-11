import React from 'react'
import Home from '../../components/MainPage/Home'
import FlashDeals from '../../components/FlashDeals/FlashDeals'
import TopCate from '../../components/top/TopCate'
import NewArrival from '../../components/NewArrival/NewArrival'
import Discount from '../../components/Discount/Discount'
import Shop from '../../components/Shop/Shop'
import Announcement from '../../components/Announcement/Announcement'
import Wrapper from '../../components/Wrapper/Wrapper'
const Pages = ({productItems ,cartItem ,addToCart ,shopItems}) => {
  return (
    <>
      <Home cartItem = {cartItem}/>
      <FlashDeals productItems = {productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrival/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart}/>
      <Announcement/>
      <Wrapper/>
    </>
  )
}

export default Pages

