import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import { TChildrenProps } from '../@types/Context';
import { NextPage } from 'next';

const Layout: NextPage<TChildrenProps> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>|Digital Love</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout