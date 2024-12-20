import Button from "../button/button.component";
import { useContext } from "react";
import { DropdownContext } from "../contexts/dropdown.context";
import "./checkout-item.styles.scss";

export default function CheckOutItem({ item }) {
  const { name, imageUrl, price, quantity } = item;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(DropdownContext);

  const addMoreToCart = () => {
    addItemToCart(item);
  };

  const takeOutFromCart = () => {
    removeItemFromCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div onClick={takeOutFromCart} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addMoreToCart} className="arrow">
          &#10095;
        </div>
      </div>
      <div className="price">{price}</div>
      <div className="remove-button">
        <div onClick={() => clearItemFromCart(item)}>&#10005;</div>
      </div>
    </div>
  );
}
