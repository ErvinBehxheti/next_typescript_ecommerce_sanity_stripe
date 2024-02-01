import { NextPage } from 'next';
import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer: NextPage = () => {
  return (
    <div className="footer-container">
      <p>2022 Novagency Shopping</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer
