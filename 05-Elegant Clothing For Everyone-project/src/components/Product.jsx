import { useContext } from "react";
import { CartContex } from "../store/Store-shopping-cart";

export default function Product({
  id,
  image,
  title,
  price,
  description,
}) {
  const add=useContext(CartContex);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={() => add.addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
