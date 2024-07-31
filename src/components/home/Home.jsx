import React from 'react'
import { useEffect, useState } from 'react'
import '../home/Home.css'

import Card from '../Cards/CardType1'
import Landing from '../Section1/Landing'
import data from "./../../products.json"
import Login1 from '../LoginPage/Login1'
import CardsType3 from '../Cards/CardsType3'
import CardsType2 from '../Cards/CardsType2'
import SpecialCard from '../Cards/SpecialCard'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
        
      <section className="s1">
        <Landing></Landing>
      </section>
      <section className="s2">
        <div className="heading">
          <div className="h1">
            <p>dreamy rooms</p>
          </div>
          <div className="h2">
            <p>Three sleep space layered in style and comfort</p>
          </div>
        </div>
        <div className="cardType1Cont">
        { 
          data.slice(0, 3).map((item)=>{
           
         return  <Card name={item.title} price={item.price} img={item.img}></Card>
    })
   }
        </div>
      </section>
      <section className="s3">
        <Login1></Login1>
        <div className="cardTYpe2">
        {
          data.slice(3, 5).map((item)=>{
            return < CardsType2 name={item.name} title={item.title} price={item.price} img={item.img} date={item.endsDate}/>
          })
        }
        </div>
        <div className="changeCard">
          <div className="c1"><p>New Product</p></div>
          <div className="c1"><p>Popular Products</p></div>
          <div className="c1"><p>Our Offers</p></div>
        </div>
        <div className="cardTYpe3">
       {
        data.slice(5, 11).map((item)=>{
          return  <CardsType3 name={item.title} date={item.price} img={item.img}></CardsType3>
        })
       }
        </div>
        <div className="specialCard">
            {
              data.slice(11, 13).map((item)=>{
                return < SpecialCard img={item.img}/>
              })
            }
            <div className="sp2">
              <img src="https://i1.wp.com/www.freshouttatime.com/wp-content/uploads/2014/10/target-free-shipping.jpg?fit=1024%2C582&ssl=1" alt="" />
            </div>
        </div>
      </section>
            
    </>
  )
}

export default Home
