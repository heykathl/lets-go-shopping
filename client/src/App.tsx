import { useState } from 'react';
import { useQuery } from 'react-query';
// import axios from 'axios';

import Drawer from '@mui/material';
import { LinearProgress } from '@mui/material';
import Grid from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material';
// Style
import { Wrapper } from './App.style';
// Types
export type CartItemType = {
  id: number;
  catergory: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;

}

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products/')).json();


const App = () => {

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
