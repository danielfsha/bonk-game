"use client";

import solanaWeb3 from "@solana/web3.js";
import { Wallet } from "./wallet";

const Nav = () => {
  console.log(solanaWeb3);

  return (
    <nav className="nav">
      <div className="logo">logo</div>
      <div className="score" data-score>
        0
      </div>
      <Wallet></Wallet>
    </nav>
  );
};

export default Nav;
