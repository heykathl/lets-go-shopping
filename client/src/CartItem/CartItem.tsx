import Button from '@mui/material';
// Types
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './CartItem.style';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = () => <div>Cart Item</div>

export default CartItem;