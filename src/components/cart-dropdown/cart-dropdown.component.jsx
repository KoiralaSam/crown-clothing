import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to CheckOut</Button>
      </div>
    </div>
  );
}
