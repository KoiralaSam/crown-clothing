import "./product-card.styles.scss";
import Button from "../button/button.component";
import { DropdownContext } from "../contexts/dropdown.context";
import { useContext } from "react";

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(DropdownContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="prices">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
}
