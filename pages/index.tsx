import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import { THome, TProduct } from '../@types/Index';
import { NextPage } from 'next';

const Home: NextPage<THome> = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>To solve your problems</p>
    </div>
    <div className="products-container">
      {products?.map((product: TProduct) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;