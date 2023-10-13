import { useEffect, useState } from "react";

const TokenProvider = () => {
  return sessionStorage.getItem('token')
}

export default TokenProvider;
  