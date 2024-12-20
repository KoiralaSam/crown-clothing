import { useContext } from "react";
import { DropdownContext } from "../contexts/dropdown.context";
import CheckOutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

export default function CheckOut() {
  const { cartItems } = useContext(DropdownContext);

  const calcTotal = (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

  const total = calcTotal(cartItems);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>

        <span className="header-block">Description</span>

        <span className="header-block">Quantity</span>

        <span className="header-block">Price</span>

        <span className="header-block">Remove</span>
      </div>

      {cartItems.map((item) => {
        return <CheckOutItem key={item.id} item={item} />;
      })}

      <div>
        <span className="total">Total: ${total}</span>
      </div>
    </div>
  );
}
