import React from "react";
import "./Card.css";
import { useState } from "react";


function Card(props) {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  // const cartItems = [];

  const handleAddCart = (item, item1) => {
    setCart(cart + 1);
    setTotal((prev) => prev + item);
    // cartItems.push(item1);
    setCartItems((prev) => [...prev, item1]);
    // console.log(cartItems);
  };
  const deleteItems = (e) => {
    cartItems.splice(cartItems.indexOf(e), 1);
    setCart(cart - 1);
    setTotal((prev) => prev - e.price);
  };


  return (
    <div >
      <div className="container">
        <div className="row">
          {props.type.map((item) => {
            return (
              // flip card method
              <>
                <div>
                  <div class="card col-12 col-sm-12 col-md-3">
                    <img src={item.img}
                      width={300}
                      height={270}
                      alt="Mobile-images"
                    />
                    <div class="card__content">
                      <p class="card__title">{item.name}</p>
                      <p class="card__description">{item.unit} {item.price}</p>
                      <button
                        onClick={() => handleAddCart(item.price, item)}
                        className="add"
                      >
                        {item.button}
                      </button>
                    </div>
                  </div>
                  <div className="itemtitle">
                    {item.title}
                  </div>
                </div>
              </>

              // simple card method 

              // <div className="card col-12 col-sm-12 col-md-3 ">
              //   <img
              //     src={item.img}
              //     alt="450*300"
              //     width="250px"
              //     height="200px"
              //   />
              //   <div className="content">
              //     <h6>{item.name}</h6>
              //     <p>
              //       {item.unit} {item.price}
              //     </p>
              //     <button
              //       onClick={() => handleAddCart(item.price, item)}
              //       className="add"
              //     >
              //       {item.button}
              //     </button>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>
      <div className="cartDetails">
        <section className="align">
          <p>Cart: {cart}</p>
          <p>Total: {total}</p>
          Cart Items:{" "}
          {cartItems.map((e) => {
            return (
              <div className="delete">
                Product: {e.name} <br />
                Amount: {e.price}
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItems(e)}
                >
                  Delete Item
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
export default Card;
