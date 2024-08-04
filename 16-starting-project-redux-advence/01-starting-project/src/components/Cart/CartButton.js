import { useDispatch, useSelector } from 'react-redux';
import {  uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch();
  function heandelToggle(){
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={heandelToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
