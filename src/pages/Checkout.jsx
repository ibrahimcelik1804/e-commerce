import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const Checkout = () => {
  const { addToBasket, basket, removeFromBasket } = useContext(BasketContext);
  // console.log(addToBasket, basket, removeFromBasket);
  const total=basket.reduce((total, i)=> total + i.price*i.amount , 0)

  return (
    <div>
      {basket.lenght === 0 ? (
        <h3>Öncelikle Sepete Bir Kaç Ürün Ekle</h3>
      ) : (
        <h5 className="text-center my-4">
          Toplam <span className="text-success">${total.toFixed(2)}</span>
        </h5>
      )}
      {basket.map((i, index) => (
        <div
          key={index}
          className="d-flex justify-content-between align-items-center p-3 gap-3"
        >
          <img src={i.image} height={100} className="rounded shadow" />
          <h4>{i.title.slice(0,15)}...</h4>
          <h3>${i.price}</h3>
          <p>Miktar:{i.amount}</p>
          <div>
            <BiSolidUpArrow
              role="botton"
              className="text-success"
              onClick={() => addToBasket(i)}
            />
            <BiSolidDownArrow
              role="botton"
              className="text-danger"
              onClick={() => removeFromBasket(i)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
