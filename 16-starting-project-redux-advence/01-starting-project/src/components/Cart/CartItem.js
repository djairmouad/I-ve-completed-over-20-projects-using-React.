import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { dispatchCartSlice } from '../../store/cart-slice';

const CartItem = (props) => {
  const { id ,title, quantity, total, price } = props.item;
  const dispatch=useDispatch()
  function heandelRemoveItem(){
    dispatch(dispatchCartSlice.removeItemToCart( { id ,title, quantity, total, price }));
  }
  function heandelAddItem(){
    dispatch(dispatchCartSlice.addItemToCart( { id ,title, quantity, total, price }));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={heandelRemoveItem}>-</button>
          <button onClick={heandelAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
