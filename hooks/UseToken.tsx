// import { RootState } from '@/redux/store'
// import React from 'react'
// import { useSelector } from 'react-redux'
// const UseToken = () => {
//     const TokenObject = useSelector((state:RootState)=>state.Token)
//   return TokenObject.token
// }

// export default UseToken

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

// Create a custom hook to access the token
const useToken = () => {
  const tokenObject = useSelector((state: RootState) => state.Token);
  return tokenObject.token;
};

export default useToken;

