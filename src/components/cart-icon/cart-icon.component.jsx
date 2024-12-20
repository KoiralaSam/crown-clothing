import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { DropdownContext } from "../contexts/dropdown.context";
import "./cart-icon.styles.scss";

export default function Cart({ callback }) {
  const { cartItems } = useContext(DropdownContext);
  const quantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const { dropdown, setDropdown } = useContext(DropdownContext);

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
}
