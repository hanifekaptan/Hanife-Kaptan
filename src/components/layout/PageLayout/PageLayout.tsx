import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';

import styles from './PageLayout.module.css';

const PageLayout: React.FC = () => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar />

      <main className={styles.container}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;