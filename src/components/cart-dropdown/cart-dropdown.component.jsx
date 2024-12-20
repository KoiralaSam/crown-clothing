import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-items/cart-item.component";
import { useContext } from "react";
import { DropdownContext } from "../contexts/dropdown.context";
import { useNavigate } from "react-router-dom";

export default function CartDropdown() {
  const { cartItems, addItemToCart } = useContext(DropdownContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go to CheckOut</Button>
    </div>
  );
}
