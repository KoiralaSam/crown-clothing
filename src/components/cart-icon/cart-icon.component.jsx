import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { useEffect, useContext } from "react";
import { DropdownContext } from "../contexts/dropdown.context";
import "./cart-icon.styles.scss";

export default function Cart({ callback }) {
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const { dropdown, setDropdown } = useContext(DropdownContext);

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}
