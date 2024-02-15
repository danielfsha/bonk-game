"use client";

import solanaWeb3 from "@solana/web3.js";
import { Wallet } from "@/components/Wallet";

const Nav = () => {
  console.log(solanaWeb3);

  return (
    <div className="nav">
      <div className="logo">logo</div>
      <div className="score" data-score>
        0
      </div>
      <Wallet></Wallet>
    </div>
  );
};

export default Nav;
